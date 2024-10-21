import express, { Application } from 'express';
import requestContextMiddleware from '#shared/request-context/request-context.middleware';
import openApiRouter from '#api/openapi/openapi.router';
import cartRouter from '#api/routers/cart.router';
import { getCartController } from '#api/inject/controllers';

const bootstrap = (): Application => {
  const app: express.Application = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(requestContextMiddleware);
  app.use(openApiRouter());
  app.use(cartRouter(getCartController()));
  return app;
};

export default bootstrap;
