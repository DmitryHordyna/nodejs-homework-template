const { Schema, model, SchemaTypes } = require('mongoose');
const Joi = require('joi');

const RegExptPhone = /^[(]{1}[0-9]{3}[)]{1} [0-9]{3}-[0-9]{4}$/;
const RegExptEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const contactSchema = Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
      required: [true, 'Set name for contact'],
      minlength: 3,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      match: RegExptEmail,
    },
    phone: {
      type: String,
      require: true,
      unique: true,
      match: RegExptPhone,
    },
    favorite: {
      type: Boolean,
      require: true,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
      require: true,
    },
  },
  { versionKey: false, timestamps: true },
);

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phone: Joi.string().pattern(RegExptPhone).required(),
  email: Joi.string().pattern(RegExptEmail).required(),
});

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
  joiSchema,
};
