const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const getCurrentUser = require('./getCurrentUser');
const verify = require('./verify');
const repeatVerification = require('./repeatVerifycation');

module.exports = {
  signup,
  login,
  logout,
  getCurrentUser,
  verify,
  repeatVerification,
};
