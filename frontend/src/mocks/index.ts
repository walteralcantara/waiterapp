import { Order } from 'types/Order';

export const orders: Order[] = [
  {
    _id: '1',
    table: '76',
    status: 'WAITING',
    products: [
      {
        _id: '1_1',
        quantity: 3,
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668475835075-quatro-queijos.png',
          price: 40,
        },
      },
      {
        _id: '1_2',
        quantity: 2,
        product: {
          name: 'Coca cola 350ml',
          imagePath: '1668528570777-coca-cola.png',
          price: 7,
        },
      },
    ],
  },
];
