const { Current } = require('../../models');

const getAll = async (req, res) => {
  const result = Current.find({ owner: req.user._id }).populate(
    'owner',
    'id',
    'contact',
  );
  res.json({
    status: 'susses',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getAll;
