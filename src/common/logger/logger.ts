import pino from 'pino';
import config from '#config/config';
import { ENV } from '#common/env';

/**
 * Configures and exports the logger instance.
 * Uses the 'pino' library for fast, low-overhead logging.
 */

const logger = pino({
  level: config.logger.logLevel,
  ...(config.env === ENV.LOCAL
    ? {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            ignore: 'pid,hostname',
          },
        },
      }
    : {}),
});

export default logger;
