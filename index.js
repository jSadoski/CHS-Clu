const client = require("./client");
const Sequelize = require("sequelize");
const api = require("./api.js");

const app = client.start(
  "MzgxOTUxNjU2NTc0NzEzODU3.WhIWMw.V5UVIh9nMnGNHLF6Z2MA2tkJqtE"
);

api.start(client.guilds.cache.get("381697784270553089"), 3000);
