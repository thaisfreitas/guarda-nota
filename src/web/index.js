const express = require("express");
const app = express();
let InvoicesController = require('../controllers/invoices');

const invoicesController = new InvoicesController();

app.get('/', (request, response) => {
  response.sendStatus(200);
});

app.get('/invoices', (request, response) => {
  invoicesController.get(request, response);
});

module.exports = app;
