const { Contact, joiSchema } = require('./contact');
const { User, joiUserSchema } = require('./user');

module.exports = {
  User,
  Contact,
  joiSchema,
  joiUserSchema,
};
