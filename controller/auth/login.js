const { BadRequest } = require('http-errors');
const jwl = require('jsonwebtoken');

const { User } = require('../../models');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const { _id } = user;

  if (!user || !user.comparePassword(password)) {
    throw new BadRequest('Wrong email or password');
  }

  const payload = {
    id: user._id,
  };
  const { SECRET_KEY } = process.env;

  const token = jwl.sign(payload, SECRET_KEY);
  await User.findByIdAndUpdate(user._id, { token });
  res.json({ token, email, _id });
};

module.exports = login;
