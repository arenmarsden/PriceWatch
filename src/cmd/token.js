// Copyright (c) Aren Marsden 2021. Licensed under MIT License.

'use strict';

module.exports.run = async (client, message, [action, token, ...value]) => {
  await message.channel.send('Hello!');
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['t']
}

module.exports.help = {
  name: 'token',
  description: 'Manage your tokens or coins!',
  usage: 'token [add,remove] [value]'
}
