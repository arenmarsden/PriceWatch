// Copyright (c) Aren Marsden 2021. Licensed under MIT License.

'use strict';

const mongoose = require('mongoose');
const config = require('../config.json');

module.exports = async () => {
  await mongoose.connect(config.mongo.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}
