"use strict";

const fs = require("fs");
const path = require("path");
const pathBase = path.resolve(__dirname, "..");

const config = {
  env: process.env.ENV || "development",
  log: {
    dir: path.resolve(pathBase, "log")
  },
  private_key: fs.readFileSync(path.join(__dirname, "./jwtRS256.key")),
  public_key: fs.readFileSync(path.join(__dirname, "./jwtRS256.key.pub"))
};

let overrides = {};
if (config.env === "development") {
  overrides = require("./config.json");
} else {
  overrides = require(`./config_${config.env}.json`);
}
Object.assign(config, overrides);

module.exports = config;
