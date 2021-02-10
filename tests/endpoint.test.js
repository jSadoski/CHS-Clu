require("dotenv").config();
const request = require("supertest");
const app = require("../src/app.js");
const path = require("path");
const Umzug = require("umzug");

const migrations = path.join(__dirname, "../src/db/migrations");

describe("Server Endpoint", () => {
  let instance, http, umzug;

  beforeAll(async (done) => {
    instance = await app(
      process.env.BOT_TOKEN,
      process.env.DISCORD_SERVER,
      4001
    );
    // instance.db.sequelize.authenticate(); // Test DB connection
    // const sequelize = instance.db.sequelize;
    // const umzug = new Umzug({
    //   migrations: {
    //     // indicates the folder containing the migration .js files
    //     path: migrations,
    //     // inject sequelize's QueryInterface in the migrations
    //     params: [sequelize.getQueryInterface()],
    //   },
    //   // indicates that the migration data should be store in the database
    //   // itself through sequelize. The default configuration creates a table
    //   // named `SequelizeMeta`.
    //   storage: "sequelize",
    //   storageOptions: {
    //     sequelize: sequelize,
    //   },
    // });

    // // Checks migrations and run them if they are not already applied. To keep
    // // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
    // // will be automatically created (if it doesn't exist already) and parsed.
    // await umzug.up();

    http = instance.http;
    done();
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

  xtest("/poll (post)", (done) => {
    const answer = (emoji, answerText) => {
      return { emoji: emoji, answer: answerText };
    };

    const poll = {
      channel: "804484826488635402",
      title: "Food",
      question: "What would you like to eat?",
      answers: [
        answer("🌯", "Burrito"),
        answer("🍱", "Bento Box"),
        answer("🍰", "Shortcake"),
        answer("🥟", "Dumpling"),
      ],
    };
    request(http)
      .post("/poll")
      .send(poll)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        const resObj = JSON.parse(res.text);
        expect(resObj).toHaveProperty("id");
        expect(resObj).toHaveProperty("channelID");
        expect(resObj.channelID).toEqual(poll.channel);
        done();
      });
  });
});
