const client = require("./discord/client");
// const Sequelize = require("sequelize");
const api = require("./server/server");

module.exports = async (token, serverID, port) => {
  const instance = {};
  instance.client = await client.start(token);
  instance.guild = instance.client.guilds.cache
    .array()
    .filter((guild) => guild.id == serverID)[0];
  instance.http = await api(instance.guild, port);

  instance.close = (done) => {
    Promise.all([instance.client.destroy(), instance.http.close()])
      .then(done)
      .catch((err) => console.log(err));
  };

  return instance;
};
