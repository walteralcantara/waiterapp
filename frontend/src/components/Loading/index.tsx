interface SpinnerProps {
  size?: number;
  color?: string;
}

import * as S from './styled';

export function Loading({ size = 32, color }: SpinnerProps) {
  return <S.Spinner size={size} color={color} />;
}
