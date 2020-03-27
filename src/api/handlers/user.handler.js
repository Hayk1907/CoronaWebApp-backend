const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send( users );
  } catch (err) {
    res.status(500).send({ message: 'Something went wrong' });
    console.log(err);
  }
};
exports.createUsesr = (req, res) => {
  const { name, surname, location, temperature } = req.body;
  const user = new User({ name, surname, location, temperature });
  user.save((err, user) => {
    if (err) {
      return res.status(400).send({ message: 'Something went wrong' });
      console.log(err);
    }

    return res.status(201).send({ user });
  });
};
