const client = require("./discord/client");
// const Sequelize = require("sequelize");
const api = require("./server/server");

module.exports = async (token, serverID, port) => {
  const instance = {};
  instance.client = await client.start(token);
  instance.api = await api.start(
    client.guilds.cache.array().filter((guild) => guild.id == serverID)[0],
    port
  );
  return instance;
};
