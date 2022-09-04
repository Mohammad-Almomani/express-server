"use strict";

const supertest = require("supertest");
const server = require("../server");
const request = supertest(server.app);

describe("API server", () => {
  it("Check home page", async () => {
    const res = await request.get("/");
    expect(res.text).toEqual("Hello World!");
  });

  it("Check person POST endPoint", async () => {
    const person = { name: "John", age: 25, gender: "male" };
    const res = await request.post("/person").send({ person });
    expect(res.text).toEqual("30");
  });
});
