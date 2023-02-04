import { useState } from 'react';

import { toast } from 'react-toastify';

import { OrderModal } from 'components/OrderModal';
import { Order } from 'types/Order';
import { api } from 'utils/api';
import * as S from './styled';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const newStatus =
      selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status: newStatus });

    toast.success(
      `O pedido da mesa ${selectedOrder?.table} teve o status alterado para ${newStatus}`
    );
    onChangeOrderStatus(selectedOrder!._id, newStatus);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));
    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <S.Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        onChangeOrderStatus={handleChangeOrderStatus}
      />

      <header>
        <span>{icon}</span>
        <span>{title}</span>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <S.OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModal(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </S.OrdersContainer>
      )}
    </S.Board>
  );
}
