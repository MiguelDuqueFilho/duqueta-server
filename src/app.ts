import express from 'express';
import path from 'path';
import cors from 'cors';

import morganDevColor from './middlewares/log';

const app = express();

function middlewares() {
  app.use(cors());
  app.use(morganDevColor);
  app.use(express.json());
}

function routes() {
  app.use('/images', express.static(path.resolve(__dirname, 'images')))
}

middlewares();
routes();

export default app;
