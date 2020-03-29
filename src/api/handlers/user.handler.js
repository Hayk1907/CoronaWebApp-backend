const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: 'Something went wrong' });
    console.log(err);
  }
};
exports.createUser = (req, res) => {
  const { name, surname, long, lat, temperature, gender } = req.body;
  const user = new User({ name, surname, long, lat, temperature, gender });
  user.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).send({ message: 'Something went wrong' });
    }
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': 'userId',
      userId: user._id,
    });
    return res.status(201).send(user);
  });
};

exports.getUserById = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findOne({ _id });
    return res.status(201).send(user);
  } catch (err) {
    res.status(500).send({ message: 'Something went wrong' });
    console.log(err);
  }
};
