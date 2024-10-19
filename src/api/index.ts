import express, { Application } from 'express';
import requestContextMiddleware from '#shared/request-context/request-context.middleware';

const bootstrap = (): Application => {
  const app: express.Application = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(requestContextMiddleware);
  return app;
};

export default bootstrap;
