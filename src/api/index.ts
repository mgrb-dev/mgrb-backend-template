import express, { Application } from 'express';
import cartRouter from '#api/routers/cart.router';
import { getCartController } from '#api/inject/controllers';

const bootstrap = (): Application => {
  const app: express.Application = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  return app;
};

export default bootstrap;
