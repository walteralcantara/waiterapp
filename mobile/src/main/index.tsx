import { Button } from '../components/Button';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

import * as S from './styled';

export function Main() {
  return (
    <>
      <S.Container>
        <Header />

        <S.CategoriesContainer>
          <Categories />
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>
      </S.Container>

      <S.Footer>
        <S.FooterContainer>
          <Button onPress={() => alert('HEY')}>Novo Pedido</Button>
        </S.FooterContainer>
      </S.Footer>
    </>
  );
}
