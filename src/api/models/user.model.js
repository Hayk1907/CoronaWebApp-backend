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
  temperature: {
    type: String,
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
  location: {
    type: { type: String },
    coordinates: [],
  },
});

userSchema.index({ location: "2dsphere" });

module.exports = model('user', userSchema);
