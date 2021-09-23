// const sqMail = require('@sendgrid/mail');
// const nodemailer = require('nodemailer');
// require('dotenv').config();
// // const { getMaxListeners } = require('../app');
// const { SENDGRID_API_KEY } = process.env;
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

// const transporter = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: 'hordynadmytro@gmail.com',
//   from: 'darkhordyna@meta.ua',
//   subject: 'регистрация на сайте',
//   html: '<p>Congratulfation<p>',
// };

// transporter
//   .sendMail(email)
//   .then(() => console.log('Good'))
//   .catch(error => console.log(error.message));

// module.exports = sendMail;

// sqMail.setApiKey(SENDGRID_API_KEY);

// const sendMail = async data => {
//   try {
//     const mail = { ...data, from: 'dim4ka2013@gmail.com' };
//     const result = await sqMail
//       .send(mail)
//       .then(() => console.log('GOOd'))
//       .catch(error => console.log('mistake'));
//   } catch (error) {
//     return false;
//   }
// };

// sqMail
//   .send(mail)
//   .then(() => console.log('GOOd'))
//   .catch(error => console.log('mistake'));
