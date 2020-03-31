const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    const lat = req.query.lat;
    const long = req.query.long;
    const users = await User.find({
      location: {
        $near: {
          $maxDistance: 1000,
          $geometry: {
            type: 'Point',
            coordinates: [long, lat],
          },
        },
      },
    }).sort({ date: -1 });
    console.log(users);

    return res.status(200).send({
      name: users.name,
      surname: users.surname,
      long: users.location.coordinates[0],
      lat: users.location.coordinates[1],
      temperature: users.temperature,
      gender: users.gender,
    });
  } catch (err) {
    res.status(500).send({ message: 'Something went wrong' });
    console.log(err);
  }
};
exports.createUser = (req, res) => {
  const { name, surname, long, lat, temperature, gender } = req.body;
  const coordinates = [long, lat];
  const user = new User({
    name,
    surname,
    location: { type: 'Point', coordinates },
    temperature,
    gender,
  });
  user.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ message: 'Something went wrong' });
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
    const {
      name,
      surname,
      location,
      temperature,
      gender,
    } = await User.findOne({ _id });
    return res
      .status(201)
      .send({
        name,
        surname,
        long: location.coordinates[0],
        lat: location.coordinates[1],
        temperature,
        gender,
      });
  } catch (err) {
    res.status(500).send({ message: 'Something went wrong' });
    console.log(err);
  }
};
