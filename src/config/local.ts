import { AppConfig } from '#config/config';

export default {
  logger: {
    logLevel: 'debug',
  },
  clients: {
    cartClient: {
      baseUrl: 'https://dummyjson.com',
      timeout: 10,
      retries: 3,
      retryDelay: 1000, //TODO: axios-retry
    },
  },
} as AppConfig;
