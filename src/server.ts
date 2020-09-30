import config from './config/config';

import http from 'http';
import app from './app';

http.createServer(app).listen(config.server.port || 3333, () => {
  console.info(
    `Server Backend Duqueta running in http on Port: ${config.server.port}.`
  );
});

process.on('SIGINT', function () {
  console.log('\nServer Backend Duqueta ended.');
  process.exit();
});
