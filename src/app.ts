import express from 'express';
import path from 'path';
import cors from 'cors';
import OrphanagesController from './controllers/ImagesController';

import morganDevColor from './middlewares/log';

const app = express();

function middlewares() {
  app.use(cors());
  app.use(morganDevColor);
  app.use(express.json());
}

function routes() {
  app.use('/images', express.static(path.resolve(__dirname, 'images')));
  app.post('/api/images/:id', OrphanagesController.update);
}

middlewares();
routes();

export default app;
