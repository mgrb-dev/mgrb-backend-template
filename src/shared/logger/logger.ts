import pino from 'pino';
import config from '#config/config';

/**
 * Configures and exports the logger instance.
 * Uses the 'pino' library for fast, low-overhead logging.
 */

const logger = pino({
  level: config.logger.logLevel,
});

export default logger;
