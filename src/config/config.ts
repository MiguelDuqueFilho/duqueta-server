require('dotenv').config({
  path: '.env',
});
const config = {
  server: {
    port: process.env.SERVER_PORT,
  },
  email: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

export default config;
