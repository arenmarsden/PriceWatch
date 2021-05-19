// Copyright (c) Aren Marsden 2021. Licensed under MIT License.

'use strict';

module.exports = async (client, message) => {
  // Ignore any bots that attempt to execute our commands.
  if (message.author.bot) return;

  // Ignore commands that do not start with our prefix.
  if (message.content.indexOf(client.config.cmd.prefix) !== 0) return;

  // Separate our command name and our arguments.
  const args = message.content.slice(client.config.cmd.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Fetch the member if they are offline or on invisible.
  if (message.guild && !message.member) {
    await message.guild.members.fetch(message.author);
  }

  const cmd = client.commands.get(command) || client.aliases.get(command);
  if (!cmd) return;

  // Run the command if it exists.
  await cmd.run(client, message, args);
};
