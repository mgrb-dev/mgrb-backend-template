import type { Request, Response } from 'express';

export function healthCheck(req: Request, res: Response): void {
  res.status(200).json({
    message: 'Server is running!',
    timestamp: new Date().toISOString(),
  });
}
