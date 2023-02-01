import { OrdersBoard } from 'components/OrdersBoard';
import { orders } from 'mocks';

import * as S from './styled';

export function Orders() {
  return (
    <S.Container>
      <OrdersBoard icon="🕛" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="🧑‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </S.Container>
  );
}
