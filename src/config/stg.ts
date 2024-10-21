import { AppConfig } from '#config/config';

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
} as AppConfig;
