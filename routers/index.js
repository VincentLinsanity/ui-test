"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(module.filename);
const express = require("express");
const router = express.Router();

const routes = {
  setup: (app) => {
    const rootPaths = fs.readdirSync(`${__dirname}/`).filter((file) => {
      return file !== basename;
    });

    rootPaths.forEach((filePath) => {
      const path = `${__dirname}/${filePath}`;
      const router = require(path);
      app.use(`/api/${filePath}`, router);
    });

    app.use(router);
  }
};

module.exports = routes;
