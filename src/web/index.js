const express = require("express");
const app = express();

app.get('/', (request, response) => {
  response.sendStatus(200);
});

app.get('/invoices', (request, response) => response.send([{
  name : 'Posto de Gasolina',
  cnpj : '0987654321',
  price: 'R$ 100,00'
}]));

module.exports = app;
