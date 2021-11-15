"use strict";

const jwt = require("jsonwebtoken");
const config = require("../../configs");

const libs = {
  verifyTokenJWT: (req, res, next) => {
    const acct = req.headers["acct"];
    const token = req.headers["acct-token"];

    try {
      const decode = jwt.verify(token, config.public_key);
      if (decode.acct !== acct) throw { message: "invalid acct" };
    } catch (error) {
      console.log(error);
      return res.send(401);
    }
    return next();
  }
};

module.exports = libs;
