const { Contact } = require('../../models');

const getAll = async (req, res) => {
  const { page = 1, limit = 2 } = req.query;
  const skip = (page - 1) * limit;
  const pages = await Contact.find({});
  const result = await Contact.find(
    { owner: req.user._id },
    'email favorite name phone',
    {
      skip,
      limit: +limit,
    },
  ).populate('name phone email');
  res.json({
    totalContacts: pages.length,
    pages: Math.ceil(pages.length / limit),
    result,
  });
};

module.exports = getAll;
