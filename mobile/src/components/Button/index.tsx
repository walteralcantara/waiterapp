import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';

import * as S from './styled';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

export function Button({ children, disabled, loading, onPress }: ButtonProps) {
  return (
    <S.Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text color="#fff" weight="600">
          {children}
        </Text>
      )}

      {loading && <ActivityIndicator color="#fff" />}
    </S.Container>
  );
}
