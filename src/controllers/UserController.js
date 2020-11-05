const knex = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require('../config/config')


module.exports = {
  async selectById(req, res, next) {
    if(!req.body.token) {
      return res.status(400).json("Por favor logue em sua conta para acessar essa página.")
    }

    const token = req.body.token.replace(/['"]+/g, '')
    const decode = jwt.verify(token, config.secretkey);
    const {id} = decode.data.id;

    function appendApplicationIds(i) {
      let fullString = [i.id].join(' ')
      return fullString
    }

    async function getApplications() {
      const applicationsIdQuery = "select id from applications where user_id="+id+" and confirmed_by_ong = 1"

      let [applicationsIdResult] = await knex.raw(applicationsIdQuery)

      if(applicationsIdResult.length < 1){
        return 0
      }
      else {
        return applicationsIdResult.map(appendApplicationIds)
      }
    }

    try {
    
      const queryExists = "select users.id, users.full_name, users.cep, users.email, users.badges, `applications`.`id` as applied_to from `users` inner join `applications` on `users`.`id` = `applications`.`user_id` where `applications`.user_id="+id+" and applications.confirmed_by_ong = 1"

      const queryNotExists = "select id, full_name, cep, email, badges from users where id="+id

      let [result] = await knex.raw(queryExists)

      if(result.length < 1) {
        [result] = await knex.raw(queryNotExists)
      }

      const apiResponse = {
        id: result[0].id,
        full_name: result[0].full_name,
        cep: result[0].cep,
        email: result[0].email,
        badges: result[0].badges,
        applications: await getApplications()
      }

      return res.status(200).json(apiResponse);


    } catch (err) {
      next(err);
    }
  },

  async create(req, res, next) {
    const {
      full_name,
      birth_date,
      cep,
      email,
      password,
      background_field,
    } = req.body;

    const plainPass = password;

    bcrypt.hash(plainPass, 10).then(async function (hash) {
      try {
        await knex("users").insert({
          full_name,
          birth_date,
          cep,
          email,
          password: hash,
          background_field,
        });

        return res.status(200).json("Usuario criado.");
      } catch (err) {
        next(err);
      }
    });
  },

  async update(req, res, next) {
    //
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("users").where({ id }).del();

      return res.status(200).json("Usuário deletado.");
    } catch (err) {
      next(err);
    }
  },
};
