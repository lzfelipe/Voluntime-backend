const knex = require("../database");
const nodemailer = require("nodemailer");
const config = require('../config/config')

const transporter = nodemailer.createTransport({
  host: config.nodemailer.host,
  port: config.nodemailer.port,
  secure: config.nodemailer.secure,
  auth: {
    user: config.nodemailer.user,
    pass: config.nodemailer.pass,
  },
});

module.exports = {
  async create(req, res, next) {
    try {
      const { user_id, cpf, choosen_date, badge_url, ong_id, ong_name } = req.body;

      const rg_frente = req.files["rg_front"][0].filename;
      const rg_verso = req.files["rg_verse"][0].filename;

      let response;
      let status_res = 200;

      await knex("applications")
        .insert({
          user_id,
          cpf,
          choosen_date,
          rg_front: rg_frente,
          rg_verse: rg_verso,
          badge_url, //Valor que vai ser passado pela prop
          ong_id, //Valor que vai ser passado pela prop
          ong_name //Valor que vai ser passado pela prop
        })
        .on("query-response", (query_msg, obj, builder) => {
          response =
            "Aplicação enviada com sucesso! Aguarde a confirmação da ONG através do email cadastrado.";
        })
        .catch((error) => {
          status_res = 400;
          if (error.code === "ER_DUP_ENTRY") {
            response = "Só é permitido enviar uma aplicação por CPF.";
          } else {
            response = "Erro no sistema, contate algum admnistrador.";
          }
        })
        .then(() => {
          return res.status(status_res).json(response);
        });
    } catch (err) {
      next(err);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("applications").where({ id }).del();

      return res.status(200).json("Trabalho cancelado.");
    } catch (err) {
      next(err);
    }
  },

  async done(req, res, next) {
    try {
      const { id } = req.params;

      const [data] = await knex("applications")
      .select("user_id", "badge_url")
      .where({ id })

      await knex("applications")
        .where({ id })
        .update({ is_done: 1 })
        .then(async () => {
          await knex.raw(
            `UPDATE users SET badges= CONCAT(badges,',${data.badge_url}') WHERE id = ${data.user_id}`
          );
          await knex("applications").where({ id }).del();
        });

      return res.status(200).json(`O serviço foi concluído.`);
    } catch (err) {
      next(err);
    }
  },

  async selectById(req, res, next) {
    try {
      const { id } = req.params;

      const [UserId] = await knex("applications")
        .where({ id })
        .select("applications.user_id");

      const [userEmail] = await knex("users")
        .where({ id: UserId.user_id })
        .select("users.email");

      console.log(userEmail.email);

      const [result] = await knex("applications")
        .where({ id })
        .select("applications.*");

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  async selectByOngId(req, res, next) {
    try {
      const { ong_id } = req.params;
      const result = await knex("applications")
        .where({ ong_id: ong_id })
        .select("*");

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  async selectByUserId(req, res, next) {
    try {
      const { user_id } = req.params;
      const result = await knex("applications")
        .where({ user_id: user_id })
        .select("*");

      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  async ong_confirm(req, res, next) {
    const { id } = req.params;

    const { ong_name } = req.body;

    const [UserId] = await knex("applications")
      .where({ id })
      .select("applications.user_id");

    const [choosenDate] = await knex("applications")
      .where({ id })
      .select("applications.choosen_date");

    const [userEmail] = await knex("users")
      .where({ id: UserId.user_id })
      .select("users.email");

    const [userName] = await knex("users")
      .where({ id: UserId.user_id })
      .select("users.full_name");

    const mailOptions = {
      from: "contato@fveiga.com.br",
      to: `${userEmail.email}`,
      subject: `Voluntime - Sua aplicação para a ONG ${ong_name} foi aceita.`,
      text: `Parabéns ${userName.full_name}, sua aplicação para a ONG ${ong_name} foi aceita, por favor compareça ao endereço informado no aplicativo para completar seu trabalho. Lembrando que a data que você escolheu foi: ${choosenDate.choosen_date}h. Se possivel compareça com 15 minutos de antecedência! E não esqueca de levar seus documentos para evitar problemas! 
    
    
      Este é um email automático, quaisquer duvidas que você tenha sobre seu trabalho, entre em contato com a ONG diretamente.
    `,
    };

    try {
      await knex("applications")
        .where({ id })
        .update({ confirmed_by_ong: 1 })
        .then(() => {
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
        });

      return res.status(200).json(`Email Enviado`);
    } catch (err) {
      next(err);
    }
  },
};
