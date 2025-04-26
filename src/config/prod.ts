import type { AppConfig } from '#config/config';
import { ENV } from '#common/env';

export default {
  logger: {
    logLevel: 'warn',
  },
  clients: {
    cartClient: {
      baseUrl: 'https://dummyjson.com',
      timeout: 10000,
      retries: 3,
      retryDelay: 100,
      shouldResetTimeout: true,
    },
  },
  headers: {
    forwardHeaders: ['x-request-id'],
  },
  env: ENV.PROD,
} as AppConfig;
