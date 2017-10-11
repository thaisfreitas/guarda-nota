const request = require("supertest");
const express = require("express");
const app = require("../../src/web");

describe('Routes: Invoices', () => {
  const defaultInvoice = {
    name : 'Posto de Gasolina',
    cnpj : '0987654321',
    price: 'R$ 100,00'
  };
  describe('GET /invoices', () => {
    it('should return a list of invoices', done => {
      request(app)
      .get('/invoices')
      .set('Accept', 'application/json')
      .expect(200, [defaultInvoice], done);
    });
  });
});
