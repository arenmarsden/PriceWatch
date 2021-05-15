// Copyright (c) Aren Marsden 2021. Licensed under MIT License.

'use strict';

const axios = require('axios').default;

const pancakeSwapUrl = 'https://api.pancakeswap.info/api/tokens';

async function getPricePancakeSwap(contactAddress) {
  try {
    const rsp = axios.get(pancakeSwapUrl);
    if (rsp) {
      const data = (await rsp).data['data'][`${contactAddress}`]
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

module.exports = {
  getPricePancakeSwap
}
