import express from 'express';
import cors from 'cors';

import morganDevColor from './middlewares/log';

// import errorCustom from './app/middlewares/errorCustom';
// import routesSession from './routes/routesSession';
// import routesAdmin from './routes/routesAdmin';

const app = express();

function middlewares() {
  app.use(morganDevColor);
  app.use(express.json());
  app.use(cors());
}

function routes() {
  app.use('/images', express.static(__dirname + '/images'));

  // this.express.use('/api', routesSession);
  // this.express.use('/api', routesAdmin);
}

// handleErrors() {
//   this.express.use(errorCustom);
// }

middlewares();
routes();

export default app;
