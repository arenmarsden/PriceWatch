const {mongoose} = require('../mongo');

const Guild = mongoose.model('Guild', {
  id: Number,
  tokens: {},
});

module.exports = Guild;
