const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    const lat = req.query.lat;
    const long = req.query.long;
    const roundLatUp = Math.ceil(Number(lat)) + 0.5;
    const roundLatDown = Math.floor(Number(lat)) - 0.5;
    const roundLongUp = Math.ceil(Number(long)) - 0.6;
    const roundLongDown = Math.floor(Number(long)) - 0.6;
    console.log(lat, '*lat*', roundLatUp, roundLatDown);
    console.log(typeof roundLatDown);

    console.log(long, '*long*', roundLongUp, roundLongDown);
    const users = await User.find({
      lat: { $gt: roundLatDown, $lt: roundLatUp },
      //long: { $gt: roundLongUp, $lt: roundLongDown },
    }).sort({ date: -1 });
    // .where('lat')
    // .gt(roundLatDown)
    // .lt(roundLatUp)
    // .where('long')
    // .gt(roundLongUp)
    // .lt(roundLongDown);
    console.log(users);

    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: 'Something went wrong' });
    console.log(err);
  }
};
// ceil verev
// floor nerqev
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
