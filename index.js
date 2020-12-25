const client = require("./client");
const Sequelize = require("sequelize");
const api = require("./api.js");

client
  .start("MzgxOTUxNjU2NTc0NzEzODU3.WhIWMw.V5UVIh9nMnGNHLF6Z2MA2tkJqtE")
  .then((client) => api.start(client.guilds.cache.array()[0], 3000))
  .catch((err) => console.log(err.message));
// client.guilds.cache.get("381697784270553089")
