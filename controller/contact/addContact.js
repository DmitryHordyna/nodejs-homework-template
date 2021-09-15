const { Contact } = require('../../models');

const addContact = async (req, res) => {
  const currentUser = { ...req.body, owner: req.user._id };
  const newContact = await Contact.create(currentUser);
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      newContact,
    },
  });
};

module.exports = addContact;
