import express, { Application } from 'express';
import requestContextMiddleware from '#shared/request-context/request-context.middleware';
import logger from '#shared/logger/logger';

const bootstrap = (): Application => {
  const app: express.Application = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(requestContextMiddleware);
  logger.info({ env: process.env.NODE_ENV, message: 'Server is running!' });
  return app;
};

export default bootstrap;
