const { Contact } = require('../../models');

const getById = async (req, res) => {
  const userId = req.user.id;
  const contactId = req.params.contactId;

  const contacts = await Contact.findById({
    _id: contactId,
    owner: userId,
  }).populate({
    path: 'owner',
    select: 'email',
  });
  if (!contacts) {
    return res.status(404).json({
      message: 'Not found',
    });
  }
  res.json({
    contacts,
  });
};

module.exports = getById;
