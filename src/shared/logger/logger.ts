import pino from 'pino';

/**
 * Configures and exports the logger instance.
 * Uses the 'pino' library for fast, low-overhead logging.
 */
const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
});

export default logger;
