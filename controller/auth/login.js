const { BadRequest } = require('http-errors');
const jwl = require('jsonwebtoken');

const { User } = require('../../models');

// const SECRET_KEY = 'secret word';

// const payload = {
//   id: 'asd',
// };

// const token = jwl.sign(payload, SECRET_KEY);
// const decodeToken = jwl.decode(token);

// try {
//   const result = jwl.verify(token, SECRET_KEY);
// } catch (error) {
//   console.log(message.error);
// }

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.comparePassword(password)) {
    throw new BadRequest('Wrong email or password');
  }

  const payload = {
    id: user._id,
  };
  const { SECRET_KEY } = process.env;

  const token = jwl.sign(payload, SECRET_KEY);
  await User.findByIdAndUpdate(user._id, { token });
  res.json({ token });
};

module.exports = login;
