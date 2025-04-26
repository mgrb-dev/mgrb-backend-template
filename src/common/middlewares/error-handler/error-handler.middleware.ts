import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { ApiError } from '#common/errors/api-error';
import {
  handleApiError,
  handleGenericError,
  handleZodError,
} from '#common/errors/handler.utils';

export const errorHandlerMiddleware = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  if (err instanceof ZodError) {
    handleZodError(err, res);
    return;
  }

  if (err instanceof ApiError) {
    handleApiError(err, res);
    return;
  }

  handleGenericError(err, res);
};
