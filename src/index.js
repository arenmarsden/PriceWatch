// Copyright (c) Aren Marsden 2021. Licensed under MIT License.

'use strict';

// Setup the classes for discord.js
const {Client, Intents, Collection} = require('discord.js');
const fs = require('fs');
// Require our configuration.
const config = require('../config.json');

// Create new Discord client with all intentions.
const client = new Client({
  ws: {
    intents: Intents.ALL
  }
});

// Assign our config to client.
client.config = config;

// Assign our commands and aliases to new collections.
client.commands = new Collection();
client.aliases = new Collection();

/**
 * Initialise the Discord bot.
 * @returns {Promise<void>}
 */
async function init() {
  // Initialise events.
  const eventFiles = fs.readdirSync(__dirname + '/event');
  for (const eventFile of eventFiles) {
    if (!eventFile.endsWith('.js')) {
      console.error(`Found ${eventFile} without a .js ending.`);
      continue;
    }
    const event = require(__dirname + `/event/${eventFile}`);
    const eventName = eventFile.split('.')[0];
    client.on(eventName, event.bind(null, client));
  }

  // Asynchronously wait for our client to login successfully.
  await client.login(config.token);
}

init().catch(err => console.error(err));

module.exports = client;

