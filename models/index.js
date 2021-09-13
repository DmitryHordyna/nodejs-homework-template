const { Contact, joiSchema } = require('./contact');
const { User, joiUserSchema } = require('./user');
const { Current } = require('./current');
module.exports = {
  User,
  Contact,
  joiSchema,
  joiUserSchema,
  Current,
};
