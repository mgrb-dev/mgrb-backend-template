import { AppConfig } from '#config/config';

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
} as AppConfig;
