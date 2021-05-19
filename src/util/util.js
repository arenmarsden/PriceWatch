// Copyright (c) Aren Marsden 2021. Licensed under MIT License.

'use strict';

const axios = require('axios').default;

const pancakeSwapUrl = 'https://api.pancakeswap.info/api/tokens';

async function getPricePancakeSwap(contractAddress) {
  try {
    const rsp = axios.get(pancakeSwapUrl);
    if (rsp) {
      const data = (await rsp).data['data'][`${contractAddress}`]
      return {
        price: parseFloat(data['price']).toFixed(9),
        provider: 'PancakeSwap'
      }
    }
  } catch (error) {
    console.error(error);
    return 'Failed to fetch from PancakeSwap: ' + error
  }
}

function loadCommand(client, commandName) {
  try {
    console.log(`Loading command ${commandName}`);
    const props = require(`../cmd/${commandName}`);
    if (props.init) {
      props.init(client);
    }
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  } catch (e) {
    return `Unable to load command ${commandName}: ${e}`;
  }
}

module.exports = {
  getPricePancakeSwap,
  loadCommand
}
