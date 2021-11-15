"use strict";

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const psql = require("./models/psql");
const routers = require("./routers");
routers.setup(app);
const { logger } = require("./libs/log")("psql");

const PORT = process.env.PORT || 3000;
app.listen(PORT);

process.on("uncaughtException", (error) => {
  console.log(error);
});

const main = async () => {
  try {
    await psql.authenticate();
    await psql.initial();
  } catch (error) {
    logger.debug(error.message);
  }
};

main();
