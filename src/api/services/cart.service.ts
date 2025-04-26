import type { Cart } from '#domain/cart';

export interface CartService {
  getCart(): Promise<Cart>;
}
