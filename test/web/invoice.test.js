const request = require("supertest");
const express = require("express");
const app = require("../../src/web");

describe("/invoices", () => {
  it("returns 200", done => {
    request(app).get("/invoices").expect(200, done);
  });
});
