import { OrdersBoard } from 'components/OrdersBoard';
import { Order } from 'types/Order';

import * as S from './styled';

const orders: Order[] = [
  {
    _id: '1',
    table: '1',
    status: 'WAITING',
    products: [
      {
        _id: '1_1',
        quantity: 2,
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '',
          price: 40,
        },
      },
      {
        _id: '1_2',
        quantity: 4,
        product: {
          name: 'Coca cola 350ml',
          imagePath: '',
          price: 40,
        },
      },
    ],
  },
];

export function Orders() {
  return (
    <S.Container>
      <OrdersBoard icon="🕛" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="🧑‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </S.Container>
  );
}
