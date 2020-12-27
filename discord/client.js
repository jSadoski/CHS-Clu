const Discord = require("discord.js");

const client = new Discord.Client();

client.start = async (token) => {
  client.once("ready", () => {
    console.log("Client logged in");
  });

  await client.login(token);

  return client;
};

module.exports = client;

// thisserver = client.guilds.cache.get("381697784270553089");
