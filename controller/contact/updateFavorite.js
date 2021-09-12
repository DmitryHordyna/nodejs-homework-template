const { Contact } = require('../../models');

const updateFavorite = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavorite;
