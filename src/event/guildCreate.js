// Copyright (c) Aren Marsden 2021. Licensed under MIT License.

'use strict';

const mongoose = require('mongoose');
const {guildSchema} = require('../model/guild');

module.exports = async (client, guild) => {
  const Guild = mongoose.model('Guild', guildSchema);
  const savedGuild = new Guild();

  await savedGuild.update({id: guild.id})
  await savedGuild.save();
  await guild.channel.send('Thank you for inviting me!');
};
