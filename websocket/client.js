"use strict";

const io = require("socket.io-client");

const socket = io("http://127.0.0.1:3001/notify", {
  reconnectionDelayMax: 10000
});

socket.on("user/signin/error", (msg) => {
  console.log(msg);
});
