const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { contactsRouter } = require('./routes/api');
const { authRouter } = require('./routes/api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRouter);
//  post app.use('/api/v1/auth/register', authRouter);
//post app.use('/api/v1/auth/login', authRouter);
//get  app.use('/api/v1/auth/logout', authRouter);

app.use('/api/contacts', contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, _, res, __) => {
  const { status = 500, message = 'server error' } = err;
  res.status(status).json({ message });
});



const sqMail = require('@sendgrid/mail')
require('dotenv').config()
const { SENDGRID_API_KEY }= process.env
sqMail.setApiKey(SENDGRID_API_KEY )

const mail = {
  to: "dim4ka2013@gmail.com",
  from="hordynadmytro@gmail.com",
  subject: "регистрация на сайте" ,
  html: "<p>Congratulfation<p>",
  
}

sqMail.send(mail).then(()=>console.log("GOOd")).catch(error=>console.log("mistake")


module.exports = app;
