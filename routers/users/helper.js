"use strict";

const jwt = require("jsonwebtoken");
const config = require("../../configs");
const { sequelize } = require("../../models/psql");

const libs = {
  usersFindAll: async () => {
    const result = await sequelize.models.Users.findAll({
      attributes: ["fullname"]
    });
    return result;
  },

  signTokenJWT: (acct = "") => {
    const token = jwt.sign({ acct }, config.private_key, {
      algorithm: "RS256"
    });
    return token;
  }
};

module.exports = libs;
