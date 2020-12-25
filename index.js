const client = require("./client");
// const Sequelize = require("sequelize");
const api = require("./api.js");

if (("BOT_TOKEN", "PORT", "SERVER" in process.env)) {
  client
    .start(process.env.BOT_TOKEN)
    .then((client) =>
      api.start(
        client.guilds.cache
          .array()
          .filter((guild) => guild.id == process.env.SERVER)[0],
        process.env.PORT
      )
    )
    .catch((err) => console.log(err.message));
} else {
  console.log(
    `Missing required environment variables.\nBOT_TOKEN: ${process.env.BOT_TOKEN}, PORT: ${process.env.PORT}, SERVER: ${process.env.SERVER}`
  );
}
