const sqMail = require('@sendgrid/mail');

require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sqMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async data => {
  try {
    const mail = { ...data, from: 'dim4ka2013@gmail.com' };
    await sqMail(mail);
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = sendMail;

// const nodemailer = require('nodemailer');
// const { getMaxListeners } = require('../app');
// const { EMAIL_PASSWORD } = process.env;
// const nodemailerConfig = {
//   host: 'smpt.meta.ua',
//   port: 465, //25, 465, 2255
//   secure: true,
//   auth: {
//     user: 'darkhordyna@meta.ua',
//     pass: EMAIL_PASSWORD,
//   },
// };

// sqMail
//   .send(mail)
//   .then(() => console.log('GOOd'))
//   .catch(error => console.log('mistake'));

// const transporter = nodemailer.createTransport(nodemailerConfig);

// transporter
//   .sendMail(email)
//   .then(() => console.log('Good'))
//   .catch(error => console.log(error.message));
