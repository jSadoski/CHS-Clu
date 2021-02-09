const app = require("./app");

if (("BOT_TOKEN", "PORT", "DISCORD_SERVER" in process.env)) {
  app(process.env.BOT_TOKEN, process.env.DISCORD_SERVER, process.env.PORT)
    .then()
    .catch((err) => console.log(err.message));
} else {
  console.log(
    `Missing required environment variables.\nBOT_TOKEN: ${process.env.BOT_TOKEN}, PORT: ${process.env.PORT},DISCORD_SERVER: ${process.env.DISCORD_SERVER}`
  );
}
