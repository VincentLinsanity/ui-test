"use strict";

const jwt = require("jsonwebtoken");
const config = require("../../configs");
const { sequelize } = require("../../models/psql");
const { Op } = require("sequelize");
const crypto = require("crypto");
const secret = process.env.secret || "abcdefg";

const libs = {
  hmacPassword: (originPassword = "default") => {
    const hash = crypto
      .createHmac("sha256", secret)
      .update(originPassword)
      .digest("hex");
    return hash;
  },

  usersFindAll: async (acct) => {
    const result = await sequelize.models.Users.findAll({
      attributes: ["fullname", "acct"]
    });
    return result;
  },

  usersDeleteOne: async (acct) => {
    const result = await sequelize.models.Users.destroy({
      where: { acct: { [Op.eq]: acct } }
    });
    return result;
  },

  usersFindAllByFulname: async (fullname) => {
    const result = await sequelize.models.Users.findAll({
      where: { fullname: { [Op.eq]: fullname } },
      attributes: ["fullname"]
    });
    return result;
  },

  usersFindOneDetailByFullname: async (fullname) => {
    const result = await sequelize.models.Users.findOne({
      where: { fullname: { [Op.eq]: fullname } },
      attributes: ["acct", "fullname", "create_at", "updated_at"]
    });
    return result;
  },

  usersFindOneByFullnameAdmin: async (fullname) => {
    const result = await sequelize.models.Users.findOne({
      where: { fullname: { [Op.eq]: fullname } }
    });
    return result;
  },

  usersCreate: async (data) => {
    const result = await sequelize.models.Users.create(data);
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
