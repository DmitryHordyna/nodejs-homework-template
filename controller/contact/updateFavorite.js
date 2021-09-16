const { Contact } = require('../../models');

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  const updateFavoriteStatus = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    },
  );

  if (!updateFavoriteStatus) {
    return res.status(404).json({
      message: 'missing field favorite',
    });
  }
  res.json({
    updateFavoriteStatus,
  });
};

module.exports = updateFavorite;
