const { Conflict } = require('http-errors');
const { v4 } = require('uuid');

const { User } = require('../../models');
const sendEmail = require('../../utils');

const signup = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict('Already signup');
  }
  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // const result = await User.create({ email, password: hashPassword });

  const newUser = new User({ email, verifyToken: v4() });
  newUser.setPassword(password);
  await newUser.save();

  const { verifyToken } = newUser;

  const data = {
    to: email,
    subject: 'Confirm for registration!',
    html: `<p>Hey!</p><a href="http://localhost:3003/api/v1/verify/${verifyToken}">Click here and confirm this!/a>
    `,
  };

  await sendEmail(data);

  return res.status(201).json({
    status: 'succes',
    code: 201,
    message: 'Succes register',
  });
};

module.exports = signup;
