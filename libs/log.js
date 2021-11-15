"use strict";

const fs = require("fs");
const bunyan = require("bunyan");
const shelljs = require("shelljs");
const config = require("../configs");

const exist = (path) => {
  try {
    fs.accessSync(path, fs.F_OK);
    return true;
  } catch (error) {
    return false;
  }
};

const mkdir = (path) => {
  try {
    shelljs.mkdir("-p", path);
    return true;
  } catch (error) {
    console.log(error);
  }
};

const logDir = config.log.dir;
if (exist(logDir) === false) {
  mkdir(logDir);
}

module.exports = (name) => {
  return {
    logger: bunyan.createLogger({
      name,
      streams: [
        {
          level: "info",
          stream: process.stdout // log INFO and above to stdout
        },
        {
          level: "error",
          path: `${logDir}/error.log`
        },
        {
          level: "trace",
          path: `${logDir}/api.log`
        }
      ]
    })
  };
};
