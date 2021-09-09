const Joi = require('joi');
const { Schema, model } = require('mongoose');

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

const joiContactSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  phone: Joi.string()
    .regex(/^[' '\-()0-9]{10}$/)
    .messages({ 'string.pattern.base': 'Phone number must have 10 digits.' })
    .required(),
});

const Contact = model('contact', contactSchema);

module.exports = { Contact, joiContactSchema };
