const express = require('express');
const bodyParser = require('body-parser');
const web = require('../src/web');
const database = require('./config/database');

const app = express();

const configureExpress = () => {
  app.use('/index', web);
  app.use(bodyParser.json());

  return app;
}


module.exports = () => database.connect().then(configureExpress);
