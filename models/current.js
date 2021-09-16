const { Schema, Types, model } = require('mongoose');
const Joi = require('joi');

const currentSchema = Schema(
  {
    name: {
      type: String,
      require: true,
    },

    owner: {
      type: Types.ObjectId,
      ref: 'user',
      require: true,
    },
  },
  { versionKey: false, timesstamp: true },
);

const joiCurrentSchema = Joi.object({
  name: Joi.string().required(),
});
const Current = model('current', currentSchema);

module.exports = {
  Current,
  joiCurrentSchema,
};
