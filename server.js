"use strict";

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const psql = require("./models/psql");
const routers = require("./routers");
routers.setup(app);
const { logger } = require("./libs/log")("psql");

// https
const config = require("./configs");
const credentials = { key: config.server_key, cert: config.server_cert };
const https = require("https");
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(3443);

// http
const PORT = process.env.PORT || 3000;
app.listen(PORT);

process.on("uncaughtException", (error) => {
  console.log(error);
});

const { setupWebsocket } = require("./websocket");

const main = async () => {
  try {
    await psql.authenticate();
    await psql.initial();
    await setupWebsocket();
  } catch (error) {
    logger.debug(error.message);
  }
};

main();
