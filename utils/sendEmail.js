const nodemailer = require('nodemailer');
const { InternalServerError } = require('http-errors');

const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465, // 25, 465, 2255
  secure: true,
  auth: {
    user: 'darkhordyna@meta.ua',
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEMail = async data => {
  try {
    console.log(1);
    const email = { ...data, from: 'darkhordyna@meta.ua' };
    await transporter.sendMail(email);
  } catch (error) {
    throw new InternalServerError(error.message);
  }
};

module.exports = sendEMail;
