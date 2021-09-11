const Joi = require('joi');

const RegExptPhone = /^[(]{1}[0-9]{3}[)]{1} [0-9]{3}-[0-9]{4}$/;
const RegExptEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const joiContactsShema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phone: Joi.string().pattern(RegExptPhone).required(),
  email: Joi.string().pattern(RegExptEmail).required(),
});

module.exports = { joiContactsShema, RegExptPhone, RegExptEmail };
