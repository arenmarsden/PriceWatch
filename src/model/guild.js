// Copyright (c) Aren Marsden 2021. Licensed under MIT License.

'use strict';

const { Schema } = require('mongoose');

const guildSchema = new Schema({
  id: Number,
  tokens: {},
});


module.exports = guildSchema;
