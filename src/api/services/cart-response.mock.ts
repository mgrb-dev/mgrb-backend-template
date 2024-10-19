import { Cart } from '#domain/cart';

export const cartResponseMock: Cart = {
  items: [
    {
      id: '1',
      quantity: 1,
    },
    {
      id: '2',
      quantity: 2,
    },
  ],
  cartId: 'cartId',
};
