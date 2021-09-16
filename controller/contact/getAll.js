const { Contact } = require('../../models');

const getAll = async (req, res) => {
  const result = await Contact.find({ owner: req.user._id }).populate(
    'name phone email',
  );
  res.json({
    result,
  });
};

module.exports = getAll;
