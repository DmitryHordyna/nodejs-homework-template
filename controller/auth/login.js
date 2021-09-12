const { User } = require('../../models');
const { BadRequest } = require('http-errors');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password)) {
    throw new BadRequest('Wrong email or password');
  }

  const token = 'asdasd';
  res.json({ token });
};

module.exports = login;
