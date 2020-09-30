require('dotenv').config({
  path: '.env',
});
const config = {
  server: {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  },
};

export default config;
