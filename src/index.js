// Copyright (c) Aren Marsden 2021. Licensed under MIT License.

'use strict';

// Setup the classes for discord.js
const {Client, Intents, Collection} = require('discord.js');
// Require our configuration.
const config = require('../config.json');

const util = require('./util/util');
const mongo = require('mongo');

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
  await mongo.connect();

  // Asynchronously wait for our client to login successfully.
  await client.login(config.token);
}

client.on('message', async msg => {
  if (msg.content === '!pricewatch') {
    let rsp = await util.getPricePancakeSwap('0x2A9718defF471f3Bb91FA0ECEAB14154F150a385')
    console.log(rsp);
  }
});

init().catch(err => console.error(err));

