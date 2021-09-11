const {
  joiContactsShema,
  RegExptPhone,
  RegExptEmail,
} = require('../validation');

const { Schema, model } = require('mongoose');

const contactSchema = Schema(
  {
    name: {
      type: String,
      require: true,
      required: [true, 'Set name for contact'],
      minlength: 3,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      match: RegExptEmail,
      unique: true,
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
  },
  { versionKey: false, timestamps: true },
);

const Contact = model('contact', contactSchema);

module.exports = { Contact, joiContactsShema };
