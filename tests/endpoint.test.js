require("dotenv").config();
const request = require("supertest");
const app = require("../src/app.js");

describe("Server Endpoint", () => {
  let instance, http;

  beforeAll(async () => {
    if (("BOT_TOKEN", "PORT", "DISCORD_SERVER" in process.env)) {
      instance = await app(
        process.env.BOT_TOKEN,
        process.env.DISCORD_SERVER,
        4001
      );
      http = instance.http;
    } else {
      console.log(
        `Missing required environment variables.\nBOT_TOKEN: ${process.env.BOT_TOKEN}, PORT: ${process.env.PORT},DISCORD_SERVER: ${process.env.DISCORD_SERVER}`
      );
    }
  });

  afterAll(async (done) => {
    await instance.close(done);
  });

  test("/", (done) =>
    request(http)
      .get("/")
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body).not.toBe(null);
        done();
      }));

  test("/afkChannel", (done) =>
    request(http)
      .get("/afkChannel")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        const resObj = JSON.parse(res.text);
        expect(resObj).toHaveProperty("afkChannel");
        expect(resObj.afkChannel).toEqual(instance.guild.afkChannel);
        done();
      }));

  test("/afkChannelID", (done) =>
    request(http)
      .get("/afkChannelID")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        const resObj = JSON.parse(res.text);
        expect(resObj).toHaveProperty("afkChannelID");
        expect(resObj.afkChannelID).toEqual(instance.guild.afkChannelID);
        done();
      }));

  test("/available", (done) =>
    request(http)
      .get("/available")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        const resObj = JSON.parse(res.text);
        expect(resObj).toHaveProperty("available");
        expect(resObj.available).toEqual(instance.guild.available);
        done();
      }));
});
