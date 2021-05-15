const {Client, Intents} = require('discord.js');
const config = require('../config.json');

const client = new Client({
  ws: {
    intents: Intents.ALL
  }
});

async function init() {
  await client.login(config.token);
}

init().catch(err => console.error(err));

