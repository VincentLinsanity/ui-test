"use strict";

const express = require("express");
const router = express.Router();
const service = require("./service");
const middleware = require("./middleware");

router.get("/", middleware.verifyTokenJWT, service.getUsers);

router.get("/search", middleware.verifyTokenJWT, service.getUsersSearch);

module.exports = router;
