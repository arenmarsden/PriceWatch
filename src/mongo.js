const mongoose = require('mongoose');
const config = require('../config.json');

async function connect() {
  await mongoose.connect(config.mongo.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = {
  connect,
  mongoose
}
