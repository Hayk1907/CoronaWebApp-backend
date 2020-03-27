const mongoose = require('mongoose');

const config = require('../config/');

module.exports = _ => {
  mongoose.connect(config.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};
