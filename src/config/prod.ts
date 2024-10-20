import { AppConfig } from '#config/config';

export default {
  clients: {
    cartClient: {
      baseUrl: 'https://dummyjson.com',
      timeout: 10000,
      retries: 3,
      retryDelay: 1000, //TODO: axios-retry
    },
  },
} as AppConfig;
