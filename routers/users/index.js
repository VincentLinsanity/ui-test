"use strict";

const express = require("express");
const router = express.Router();
const service = require("./service");
const middleware = require("./middleware");

router.get("/", middleware.verifyTokenJWT, service.getUsers);

router.get("/search", middleware.verifyTokenJWT, service.getUsersSearch);

router.get("/detail", middleware.verifyTokenJWT, service.getUsersDetail);

module.exports = router;
