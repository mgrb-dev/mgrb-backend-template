import type { Request, Response } from 'express';

export interface CartController {
  getCart(req: Request, res: Response): Promise<void>;
}
