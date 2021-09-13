const { Current } = require('../../models');

const add = async (req, res) => {
  const currentUser = { ...req.body, owner: req.user._id };
  const result = await Current.create(currentUser);
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
