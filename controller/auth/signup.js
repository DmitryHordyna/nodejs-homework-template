const { Conflict } = require('http-errors');
const { User } = require('../../models');
const fs = require('fs/promises');
const path = require('path');

const userDir = path.join(__dirname, '../../', 'public/avatars');

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

  const dirPath = path.join(userDir, newUser._id.toString());
  await fs.mkdir(dirPath);

  return res.status(201).json({
    status: 'succes',
    code: 201,
    message: 'Succes register',
  });
};

module.exports = signup;
