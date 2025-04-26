import logger from '#common/logger/logger';
import type { ZodError } from 'zod';
import type { ApiError } from '#common/errors/api-error';
import { fromZodError } from 'zod-validation-error';
import type { Response } from 'express';
import { AppContext } from '#common/middlewares/request-context/request-context';

export function handleZodError(err: ZodError, res: Response): void {
  const ctx = AppContext.getInstance().getContext();
  const zodError = fromZodError(err).toString();
  logger.error({ ...err, httpStatus: 400, ...ctx });
  res.status(400).json({
    message: zodError,
    httpStatus: 400,
  });
}

export function handleApiError(err: ApiError, res: Response): void {
  const ctx = AppContext.getInstance().getContext();
  logger.error(
    { ...err.metadata, httpStatus: err.httpStatus, ...ctx },
    err.message,
  );
  res.status(err.httpStatus).json({
    message: err.message,
    httpStatus: err.httpStatus,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleGenericError(err: any, res: Response): void {
  const ctx = AppContext.getInstance().getContext();
  logger.error({ httpStatus: 500, ...err, ...ctx }, err.message);
  res.status(500).json({
    message: 'Internal Server Error',
    httpStatus: 500,
  });
}
