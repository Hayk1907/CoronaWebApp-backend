const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    //required: true,
  },
  temperature: {
    type: String,
    required: true,
  },
});

module.exports = model('user', userSchema);
