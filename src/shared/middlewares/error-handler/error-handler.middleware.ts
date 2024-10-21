import { NextFunction, Request, Response } from 'express';
import { ApiError } from '#shared/errors/api-error';
import logger from '#shared/logger/logger';
import RequestContext from '#shared/middlewares/request-context/request-context';

/**
 * Middleware to handle errors in the application.
 * Logs errors using a logger and sends an appropriate JSON response.
 * @returns A middleware function that handles errors thrown in the app.
 */
function errorHandlerMiddleware() {
  return (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    const reqId = RequestContext.getInstance().data.tid;

    if (res.headersSent) {
      logger.warn({ message: 'Response already sent', reqId });
      return;
    }

    if (err instanceof ApiError) {
      logError(err.message, err.httpStatus, reqId);
      return res.status(err.httpStatus).json({
        message: err.message,
        httpStatus: err.httpStatus,
        ...err.metadata,
      });
    }

    logError(err.message, 500, reqId);
    res.status(500).json({
      message: 'Internal server error',
      httpStatus: 500,
    });
  };
}

/**
 * Logs an error using the logger.
 * @param message - The error message.
 * @param status - HTTP status code related to the error.
 * @param reqId - Unique request ID for tracking purposes.
 */
function logError(message: string, status: number, reqId: string) {
  logger.error({ httpStatus: status, message, reqId });
}

export default errorHandlerMiddleware;
