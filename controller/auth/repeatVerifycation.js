const { NotFound, Conflict } = require('http-errors');

const { User } = require('../../models');
const sendEmail = require('../../utils');

const repeatVerification = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new NotFound('User email do not found.');
  }

  const user = await User.findOne({ email });
  const { verify, verifyToken } = user;

  if (user) {
    if (verify) {
      throw new Conflict('User already register!');
    }
    const data = {
      to: email,
      subject: 'Confirm for registration!',
      html: `<p>Hey!</p><a href="http://localhost:3003/api/v1/verify/${verifyToken}">Click here and confirm this!/a>
    `,
    };
    await sendEmail(data);
  }
};

module.exports = repeatVerification;
