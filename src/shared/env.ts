export enum ENV {
  LOCAL = 'local',
  STG = 'stg',
  PROD = 'prod',
}

/*
 * Returns the environment where the server is running.
 * The environment returned is lower-cased.
 */

export function getEnv(): ENV {
  const nodeEnv = (process.env.NODE_ENV?.toUpperCase() ||
    'LOCAL') as keyof typeof ENV;
  if (!(nodeEnv in ENV)) {
    return ENV.LOCAL;
  }

  return ENV[nodeEnv];
}
