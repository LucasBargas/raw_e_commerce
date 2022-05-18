import * as S from './Header.styles';
import Container from '../../styles/Container';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';

const Header = () => {
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderArea>
          <HeaderLogo />
          <HeaderNav />
        </S.HeaderArea>
      </Container>
    </S.HeaderContainer>
  )
}

export default Header;