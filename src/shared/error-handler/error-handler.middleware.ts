import { NextFunction, Request, Response } from 'express';
import { ApiError } from '#shared/api-error';
import logger from '#shared/logger/logger';
import RequestContext from '#shared/request-context/request-context';

/*
 * This middleware is responsible for handling errors.
 */

const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (res.headersSent) {
    return;
  }

  if (err instanceof ApiError) {
    logger.error({
      httpStatus: err.httpStatus,
      message: err.message,
      reqId: RequestContext.getInstance().data.tid,
    });

    res.status(err.httpStatus).json({
      message: err.message,
      httpStatus: err.httpStatus,
    });
  } else {
    logger.error({
      httpStatus: 500,
      message: err.message,
      reqId: RequestContext.getInstance().data.tid,
    });
    res.status(500).json({
      message: 'Internal server error',
      httpStatus: 500,
    });
  }
}; //TODO improve

export default errorHandlerMiddleware;
