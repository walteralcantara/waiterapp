import { Modal, TouchableOpacity } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';

import { Text } from '../Text';

import * as S from './styled';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({
  visible,
  onOk,
}: OrderConfirmedModalProps) {
  return (
    <Modal visible={visible} animationType="fade">
      <S.Container>
        <CheckCircle />

        <Text size={20} weight="600" color="#fff" style={{ marginTop: 12 }}>
          Pedido confirmado
        </Text>
        <Text opacity={0.9} color="#fff" style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção
        </Text>

        <S.OkButton onPress={onOk}>
          <Text color="#d73035" weight="600">
            OK
          </Text>
        </S.OkButton>
      </S.Container>
    </Modal>
  );
}
