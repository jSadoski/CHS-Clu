const client = require("./discord/client");
// const Sequelize = require("sequelize");
const api = require("./server/server");

if (("BOT_TOKEN", "DISCORD_SERVER" in process.env)) {
  client
    .start(process.env.BOT_TOKEN)
    .then((client) =>
      api.start(
        client.guilds.cache
          .array()
          .filter((guild) => guild.id == process.env.DISCORD_SERVER)[0],
        80
      )
    )
    .catch((err) => console.log(err.message));
} else {
  console.log(
    `Missing required environment variables.\nBOT_TOKEN: ${process.env.BOT_TOKEN}, DISCORD_SERVER: ${process.env.DISCORD_SERVER}`
  );
}
