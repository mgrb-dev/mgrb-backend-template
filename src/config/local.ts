import { AppConfig } from '#config/config';

export default {
  logger: {
    logLevel: 'debug',
  },
  clients: {
    cartClient: {
      baseUrl: 'https://dummyjson.com',
      timeout: 1000,
      retries: 3,
      retryDelay: 1000, //TODO: axios-retry
    },
  },
} as AppConfig;
