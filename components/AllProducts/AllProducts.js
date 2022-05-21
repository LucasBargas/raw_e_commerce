import Container from '../../styles/Container';
import products from '../../utils/products';
import ProductCard from '../ProductCard/ProductCard';
import Showcase from '../Showcase/Showcase';
import TitleSection from '../TitleSection/TitleSection';
import * as S from './AllProducts.styles';

const AllProducts = () => {
  return (
    <S.AllProjectsContainer>
      <Container>
        <TitleSection>Todos os Produtos</TitleSection>
        <Showcase>
          {products.filter(p => p.id < 9).map(p => (
            <ProductCard p={p} key={p.product} href={`/loja/produto/${p.id}`} id={p.id} />
          ))}
        </Showcase>
      </Container>
    </S.AllProjectsContainer>
  )
}

export default AllProducts;