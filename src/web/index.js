const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendStatus(200);
});

module.exports = app;
