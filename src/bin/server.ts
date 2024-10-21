import { Application } from 'express';
import bootstrap from '#api';
import errorHandlerMiddleware from '#shared/error-handler/error-handler.middleware';
import 'dotenv/config';
import { healthCheck } from '#shared/health/health-check';
import { fourZeroFourMiddleware } from '#shared/404/four-zero-four.middleware';

const HEALTH_CHECK_PATH = '/health';

const app: Application = bootstrap();

app.use(fourZeroFourMiddleware);
app.use(errorHandlerMiddleware);

app.get(HEALTH_CHECK_PATH, healthCheck);

export default app;
