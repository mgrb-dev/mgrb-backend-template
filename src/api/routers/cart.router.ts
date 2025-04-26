import { Router } from 'express';
import type { CartController } from '#api/controllers/cart.controller';

const CART_PATH = '/v1/cart';

export default function getRouter(controller: CartController): Router {
  const cartRouter = Router();

  cartRouter.get(CART_PATH, controller.getCart);

  return cartRouter;
}
