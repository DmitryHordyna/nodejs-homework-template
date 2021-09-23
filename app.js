const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { contactsRouter } = require('./routes/api');
const { authRouter } = require('./routes/api');
const sendEMail = require('./utils');

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

const mail = {
  to: 'hordynadmytro@gmail.com',
  from: '',
  subject: 'регистрация на сайте',
  html: '<p>Congratulfation loredmsfasmklfmkasnfjnsdnfkmnsdm,fn,msanm,fnsdm,nfm,sdn,fm smd fksanfkskdmfklmsdklmflksmdf<p>',
};

// sendEMail(mail);

module.exports = app;
