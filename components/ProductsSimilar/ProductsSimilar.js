import Container from '../../styles/Container';
import * as S from './ProductsSimilar.styles';
import Showcase from '../Showcase/Showcase';
import TitleSection from '../TitleSection/TitleSection';
import ProductCard from '../ProductCard/ProductCard';

const ProductsSimilar = ({ similar }) => {
  return (
    <S.ProductsSimilarContainer>
      <Container>
        <TitleSection>Produtos Semelhantes</TitleSection>
        <Showcase>
          {similar.map(p => (
            <ProductCard p={p} key={p.product} href={`/loja/produto/${p.id}`} id={p.id} />
          ))}
        </Showcase>
      </Container>
    </S.ProductsSimilarContainer>
  )
}

export default ProductsSimilar;
