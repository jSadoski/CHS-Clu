const client = require("./discord/client");
const db = require("./db/models/index");
const api = require("./server/server");

const instance = async (token, serverID, port) => {
  await Promise.all([client.start(token), db.sequelize.authenticate()])
    .then(async (res) => {
      this.db = db;
      this.client = res[0];
      this.guild = this.client.guilds.cache
        .array()
        .filter((guild) => guild.id == serverID)[0];
      this.http = await api(this.guild, this.db, port);
    })
    .catch((err) => console.log(err));

  this.close = async (done) => {
    await Promise.all([this.client.destroy(), this.http.close()])
      .then(done)
      .catch((err) => console.log(err));
  };

  return this;
};

module.exports = instance;
