const request = require("supertest");
const express = require("express");
const app = require("../../src/web");

describe("Web", () => {
  it("returns HTTP OK", done => {
    request(app).get("/").expect(200, done);
  });
});

