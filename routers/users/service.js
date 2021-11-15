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
  }
};

module.exports = libs;
