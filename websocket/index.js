"use strict";

const channels = {};

const setupWebsocket = async (WEBSOCKET_PORT = 3001) => {
  const socketIO = require("socket.io");
  const app = require("express")();
  const server = require("http").createServer(app);
  const io = socketIO(server, {});
  server.listen(WEBSOCKET_PORT);

  const namespace = "notify";
  const channel = io.of(`/${namespace}`);
  channels[namespace] = channel;

  return channels;
};

module.exports = { setupWebsocket, channels };
