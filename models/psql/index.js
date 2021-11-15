"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const { logger } = require("../../libs/log")("psql");
const { psql = {} } = require("../../configs");

const sequelize = new Sequelize(
  psql.master.database,
  psql.master.user,
  psql.master.password,
  {
    host: psql.master.host,
    dialect: "postgres",
    logging: (msg) => logger.debug(msg)
  }
);

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const initial = async () => {
  sequelize.define(
    "Users",
    {
      acct: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true
      },
      pwd: {
        type: DataTypes.STRING
      },
      fullname: {
        type: DataTypes.STRING,
        unique: true
      }
    },
    {
      createdAt: "create_at",
      updatedAt: "updated_at"
    }
  );
  await sequelize.sync({});
};

module.exports = { sequelize, authenticate, initial };
