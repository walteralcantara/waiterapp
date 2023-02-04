import { Text } from '../Text';

import * as S from './styled';

interface ButtonProps {
  children: string;
  disabled?: boolean;
  onPress: () => void;
}

export function Button({ children, disabled, onPress }: ButtonProps) {
  return (
    <S.Container onPress={onPress} disabled={disabled}>
      <Text color="#fff" weight="600">
        {children}
      </Text>
    </S.Container>
  );
}
