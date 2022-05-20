import * as S from './HomeShowcase.styles';
import Container from '../../styles/Container';
import Themes from '../../styles/Themes';
import products from '../../utils/products';
import TitleSection from '../TitleSection/TitleSection';
import Showcase from '../Showcase/Showcase';
import ProductCard from '../ProductCard/ProductCard';
import Button from '../Button/Button';

const HomeShowcase = () => {
  return (
    <S.HomeShowcaseContainer>
      <Container>
        <TitleSection>Coleção de Edição Limitada</TitleSection>
        <Showcase>
          {products.filter(p => p.id < 9).map(p => (
            <ProductCard p={p} key={p.product} href={`/loja/produto/${p.id}`} id={p.id} />
          ))}
        </Showcase>
        <S.CallToSeeMore>
          <Button
            paddingTop='2.5rem' 
            bgColor={Themes.colors.lightColor} 
            fontColor={Themes.colors.primaryColor} 
            borderColor={Themes.colors.primaryColor}
            hoverBgColor={Themes.colors.primaryColor} 
            hoverFontColor={Themes.colors.lightColor} 
            hoverBorderColor={Themes.colors.primaryColor} 
          >
            Ver mais
          </Button>
        </S.CallToSeeMore>
      </Container>
    </S.HomeShowcaseContainer>
  )
}

export default HomeShowcase;
