import type { AppConfig } from '#config/config';
import { ENV } from '#common/env';

export default {
  logger: {
    logLevel: 'debug',
  },
  clients: {
    cartClient: {
      baseUrl: 'https://dummyjson.com',
      timeout: 1000,
      retries: 3,
      retryDelay: 100,
      shouldResetTimeout: true,
    },
  },
  headers: {
    forwardHeaders: ['x-request-id'],
  },
  env: ENV.LOCAL,
} as AppConfig;
