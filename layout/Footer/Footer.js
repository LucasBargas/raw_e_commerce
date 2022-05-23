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
          <p>Esta aplicação web é uma réplica desenvolvida por <a href="https://projetoslucasbargas.com/" target="_blank" rel="noopener noreferrer">Lucas Bargas</a> com base em um layout gratuito disponibilizado na web. Porém, toda a codificação é própria.</p>
          <a href="https://pt.wix.com/website-template/view/html/2119?siteId=f004861e-89f5-4650-83aa-e841a7317f8b&metaSiteId=d140656f-8f1b-4a6d-8d84-403ca41336c8&originUrl=https%3A%2F%2Fpt.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fonline-store" target="_blank" rel="noopener noreferrer">Clique aqui para visualizar o layout original</a>
        </Container>
      </S.FooterBottom>
    </S.FooterContainer>
  )
}

export default Footer;
