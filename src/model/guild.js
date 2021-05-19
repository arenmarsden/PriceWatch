// Copyright (c) Aren Marsden 2021. Licensed under MIT License.

'use strict';

const { mongoose, Schema } = require('mongoose');

const guildSchema = new Schema({
  id: Number,
  tokens: {},
  jobs: {}
});

module.exports = guildSchema;
