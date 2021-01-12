require("dotenv").config();
const request = require("supertest");
const app = require("../app.js");

let instance = {};

beforeAll(async () => {
  if (("BOT_TOKEN", "PORT", "DISCORD_SERVER" in process.env)) {
    instance = await app(
      process.env.BOT_TOKEN,
      process.env.DISCORD_SERVER,
      process.env.PORT
    );
  } else {
    console.log(
      `Missing required environment variables.\nBOT_TOKEN: ${process.env.BOT_TOKEN}, PORT: ${process.env.PORT},DISCORD_SERVER: ${process.env.DISCORD_SERVER}`
    );
  }
});

describe("Server Endpoints Available", () => {
  it("should return a status", async () => {
    const res = await request(instance.api).get("/available");
    expect(res.statusCode).toEqual(200);
  });
});
