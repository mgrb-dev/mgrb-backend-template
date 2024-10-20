import type { NextFunction, Request, Response } from 'express';

type ControllerAction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export const asyncHandler =
  (action: ControllerAction) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await action(req, res, next);
    } catch (error: unknown) {
      next(error); //TODO map api error from error
    }
  };
