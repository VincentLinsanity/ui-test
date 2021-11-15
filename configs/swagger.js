"use strict";

const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  info: {
    title: "ui_test api", // Title (required)
    version: "1.0.0", // Version (required)
    description: "ui_test api" // Description (optional)
  },
  schemes: ["https", "http"]
  // host: config.post.host // Host (optional)
  // basePath: "/" // Base path (optional)
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ["./routers/*/*.js"]
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
