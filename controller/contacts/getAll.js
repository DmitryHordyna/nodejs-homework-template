const { Contact } = require('../../model');

const getAll = async (req, res, next) => {
  try {
    const result = await Contact.find({}, 'name phone email');
    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
