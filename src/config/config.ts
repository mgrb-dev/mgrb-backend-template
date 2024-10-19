import { Endpoint } from '#types/endpoint';
import config from './local';

export interface AppConfig {
  clients: {
    cartClient: Endpoint;
  };
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
export default config;
