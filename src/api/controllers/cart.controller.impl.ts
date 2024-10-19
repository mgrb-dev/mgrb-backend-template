import { CartController } from '#api/controllers/cart.controller';
import { CartService } from '#api/services/cart.service';
import { NextFunction, Request, Response } from 'express';
import { CartSchema } from '#domain/cart';

export class CartControllerImpl implements CartController {
  constructor(private readonly cartService: CartService) {}

  async getCart(
    _req: Request,
    res: Response,
    _next: NextFunction
  ): Promise<void> {
    const cartResponse = await this.cartService.getCart();
    await CartSchema.parseAsync(cartResponse);

    res.status(200).json(cartResponse);
  }
}
