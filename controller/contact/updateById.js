const { Contact } = require('../../models');

const updateById = async (req, res) => {
  const { contactId } = req.params;

  const updateContact = await Contact.findByIdAndUpdate(
    { _id: contactId },
    req.body,
  );

  if (!updateContact) {
    return res.status(404).json({
      message: 'Not found',
    });
  }
  res.json({
    updateContact,
  });
};

module.exports = updateById;
