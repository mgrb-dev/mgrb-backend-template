import type { AppConfig } from '#config/config';
import { ENV } from '#common/env';

export default {
  logger: {
    logLevel: 'info',
  },
  clients: {
    cartClient: {
      baseUrl: 'https://dummyjson.com',
      timeout: 10000,
      retries: 3,
      retryDelay: 100,
      shouldResetTimeout: false,
    },
  },
  headers: {
    forwardHeaders: ['x-request-id'],
  },
  env: ENV.STG,
} as AppConfig;
