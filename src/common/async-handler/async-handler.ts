import type { Request, Response } from 'express';
import { ApiError } from '#common/errors/api-error';
import { ZodError } from 'zod';
import {
  handleApiError,
  handleGenericError,
  handleZodError,
} from '#common/errors/handler.utils';

type ControllerAction = (req: Request, res: Response) => Promise<void>;

/**
 * Wraps an asynchronous controller action to handle errors gracefully.
 *
 * @param action - The asynchronous controller action to be executed.
 * @returns A middleware function to handle the async action with proper error handling.
 */
export const asyncHandler =
  (action: ControllerAction) =>
  async (req: Request, res: Response): Promise<void> => {
    try {
      await action(req, res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err instanceof ZodError) {
        handleZodError(err, res);
        return;
      }
      if (err instanceof ApiError) {
        handleApiError(err, res);
        return;
      }
      handleGenericError(err, res);
    }
  };
