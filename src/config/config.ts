import { Endpoint } from '#types/endpoint';
import { getEnv } from '#shared/enviroment';

export interface AppConfig {
  clients: {
    cartClient: Endpoint;
  };
}

const env = getEnv();
const config = require(`./${env}`).default as AppConfig;
export default config;
