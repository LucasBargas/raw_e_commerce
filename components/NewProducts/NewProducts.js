import Container from '../../styles/Container';
import products from '../../utils/products';
import ProductCard from '../ProductCard/ProductCard';
import Showcase from '../Showcase/Showcase';
import TitleSection from '../TitleSection/TitleSection';
import * as S from './NewProducts.styles';

const NewProducts = () => {
  return (
    <S.NewProjectsContainer>
      <Container>
        <TitleSection>Coleção Nova</TitleSection>
        <Showcase>
          {products.filter(p => p.id > 8).map(p => (
            <ProductCard p={p} key={p.product} href={`/loja/produto/${p.id}`} id={p.id} />
          ))}
        </Showcase>
      </Container>
    </S.NewProjectsContainer>
  )
}

export default NewProducts;