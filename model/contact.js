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

// const { Schema, model } = require('mongoose');
// const Joi = require('joi');
// // Напишите сохранение пользователя в базе

// const emailRegexp =
//   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const phoneRegexp = /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/;

// const contactSchema = Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       match: emailRegexp,
//       unique: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//       match: phoneRegexp,

//       unique: true,
//     },
//   },
//   { versionKey: false, timestamps: true },
// );

// const joiContactSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().pattern(emailRegexp).required(),
//   phone: Joi.string().pattern(phoneRegexp).required(),
// });

// const Contact = model('contact', contactSchema);

// module.exports = { Contact, joiContactSchema };
