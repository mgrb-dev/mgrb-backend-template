import { AppConfig } from '#config/config';

export default {
  logger: {
    logLevel: 'debug',
  },
  clients: {
    cartClient: {
      baseUrl: 'https://dummyjson.com',
      timeout: 100,
      retries: 3,
      retryDelay: 100,
      shouldResetTimeout: true,
    },
  },
} as AppConfig;
