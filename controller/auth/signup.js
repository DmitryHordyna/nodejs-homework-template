const { Conflict } = require('http-errors');

const { User } = require('../../models');

const signup = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict('Already signup');
  }
  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // const result = await User.create({ email, password: hashPassword });

  const newUser = new User({ email });
  newUser.setPassword(password);
  await newUser.save();

  return res.status(201).json({
    status: 'succes',
    code: 201,
    message: 'Succes register',
  });
};

module.exports = signup;
