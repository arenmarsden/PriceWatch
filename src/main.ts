import {Client, Intents} from 'discord.js';
import {token} from '../config.json';

const client: Client = new Client({
  ws: {
    intents: Intents.ALL,
  },
});

client.login(token).then(() => console.log(`Running...`))
    .catch((err) => console.error(err));
