import type { CartController } from '#api/controllers/cart.controller';
import type { CartService } from '#api/services/cart.service';
import type { Request, Response } from 'express';
import { CartSchema } from '#domain/cart';
import { asyncHandler } from '#common/async-handler/async-handler';

export class CartControllerImpl implements CartController {
  constructor(private readonly cartService: CartService) {}

  getCart = asyncHandler(async (_req: Request, res: Response) => {
    const cartResponse = await this.cartService.getCart();
    await CartSchema.parseAsync(cartResponse);

    res.status(200).json(cartResponse);
  });
}
