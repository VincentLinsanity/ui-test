"use strict";

const helper = require("./helper");
const { logger } = require("../../libs/log")("service:users");

const libs = {
  getUsers: async (req, res) => {
    let result = {};
    try {
      result = await helper.usersFindAll();
    } catch (error) {
      logger.info(error);
      return res.send(500);
    }

    return res.json({ result });
  },

  getUsersSearch: async (req, res) => {
    const { fullname = "" } = req.query;
    if (fullname === "") {
      return res.json({ message: "please proivde fullname condition" });
    }
    let result = {};
    try {
      result = await helper.usersFindAllByFulname(fullname);
    } catch (error) {
      logger.info(error);
      return res.send(500);
    }

    return res.json({ result });
  },

  getUsersDetail: async (req, res) => {
    const { fullname = "" } = req.query;
    if (fullname === "") {
      return res.json({ message: "please proivde fullname condition" });
    }
    let result = {};
    try {
      result = await helper.usersFindOneDetailByFullname(fullname);
    } catch (error) {
      logger.info(error);
      return res.send(500);
    }

    return res.json({ result });
  },

  /**
   * 用戶註冊service
   * @param {*} req
   * @param {*} res
   * @returns
   */
  postUsersSignup: async (req, res) => {
    const { acct = "", fullname = "", pwd = "" } = req.body;
    if (acct === "" || fullname === "" || pwd === "") {
      return res.json({ message: "please proivde enough info" });
    }
    let result = {};
    try {
      const hmacPassword = helper.hmacPassword(pwd);
      result = await helper.usersCreate({
        acct,
        pwd: hmacPassword,
        fullname
      });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.send("duplicate acct or fullname");
      }
      logger.info(error);
      return res.send(500);
    }

    return res.json({ result });
  }
};

module.exports = libs;
