const Discord = require("discord.js");

const client = new Discord.Client();

client.start = (token) => {
  client.once("ready", () => {
    console.log("Client logged in");
  });

  client.login(token);
};

module.exports = client;

// thisserver = client.guilds.cache.get("381697784270553089");
