const jwt = require('jsonwebtoken');
const { Unauthorized } = require('http-errors');

const { User } = require('../models');

const authenticate = async (req, _, next) => {
  try {
    // console.log(req.headers);
    const [bearer, token] = req.headers.authorization.split(' ');

    if (bearer !== 'Bearer') {
      throw new Unauthorized();
    }
    const { SECRET_KEY } = process.env;
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findOne({ token });
    if (!user) {
      throw new Unauthorized();
    }

    req.user = user;
    next();
  } catch (error) {
    throw new Unauthorized(error.message);
  }
};

module.exports = authenticate;
