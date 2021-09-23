const { NotFound } = require('http-errors');

const { User } = require('../../models');

const verify = async (req, res) => {
  const verifyToken = req.params;
  const user = await User.findOne({ verifyToken });

  if (!user) {
    throw new NotFound('User do not found.');
  }
  await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true });

  res.send('<h2>Email confirmed</h2>');
};

module.exports = verify;
