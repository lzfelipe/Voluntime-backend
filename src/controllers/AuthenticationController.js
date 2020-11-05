const knex = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require('../config/config')

module.exports = {
  async auth(req, res, next) {
    const { email, password } = req.body;

    try {
      const [hash] = await knex("users")
        .where({ email })
        .select("users.password");

      const [userId] = await knex("users").where({ email }).select("users.id");

      const match = await bcrypt.compare(password, hash["password"]);

      if (match) {
        const token = jwt.sign(
          {
            type: "user",
            data: {
              id: userId,
            },
          },
          config.secretkey,
          { expiresIn: "6h" }
        );
        return res.json({
          success: true,
          token: token,
        });
      } else {
        return res
          .status(400)
          .json({ msg: "Credencias inválidas.", success: false });
      }
    } 

    catch (error) {
      return res
        .status(400)
        .json({ msg: "Credencias inválidas.", success: false });
    }

  },
};
