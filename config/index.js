require('dotenv').config();

const PORT = process.env.PORT || 3001;
const DB_HOST = process.env.MANGO_CONNECTION_STRING;

module.exports = {
  PORT,
  DB_HOST,
};
