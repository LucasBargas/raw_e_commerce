import * as S from "./Footer.styles";
import Container from '../../styles/Container';
import FooterNav from "./FooterNav/FooterNav";
import FooterForm from "./FooterForm/FooterForm";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterTop>
        <Container>
          <S.FooterTopArea>
            <FooterNav />
            <FooterForm />
          </S.FooterTopArea>
        </Container>
      </S.FooterTop>
      
      <S.FooterBottom>
        <Container>
          <p>Esta aplicação web é uma réplica desenvolvida por <a href="https://projetoslucasbargas.com/" target="_blank" rel="noopener noreferrer">Lucas Bargas</a> com base em um layout encontrado na web. Porém, toda a codificação é própria.</p>
        </Container>
      </S.FooterBottom>
    </S.FooterContainer>
  )
}

export default Footer;
