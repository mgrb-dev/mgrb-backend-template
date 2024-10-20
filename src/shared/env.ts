import logger from '#shared/logger/logger';

export enum ENV {
  LOCAL = 'local',
  STG = 'stg',
  PROD = 'prod',
}

export function getEnv(): ENV {
  const nodeEnv = (process.env.NODE_ENV?.toUpperCase() ||
    'LOCAL') as keyof typeof ENV;
  console.log('nodeEnv', nodeEnv)
  if (!(nodeEnv in ENV)) {
    logger.warn({
      nodeEnv,
      message: 'Invalid environment, falling back to LOCAL',
    });
    return ENV.LOCAL;
  }

  logger.info({ env: ENV[nodeEnv], message: 'Server is running!' });
  return ENV[nodeEnv];
}
