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
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(Date.now()),
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = model('user', userSchema);
