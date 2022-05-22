import Head from 'next/head';
import * as S from '../../../styles/Produto.styles';
import Container from '../../../styles/Container';
import { useRouter } from "next/router";
import products from '../../../utils/products';
import ProductSlider from '../../../components/ProductSlider/ProductSlider';
import ProductDatas from '../../../components/ProductDatas/ProductDatas';
import ProductNav from '../../../components/ProductNav/ProductNav';
import ProductListDesc from '../../../components/ProductListDesc/ProductListDesc';

const Product = () => {
  const { query } = useRouter();
  const idRef = Number(query.produtoId);

  return (
    <>
      <Head>
        <title>Projetos Lucas Bargas - Raw | Loja | Produto {query.produtoId}</title>
        <meta name="description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Projetos Lucas Bargas - Raw | Loja | Produto ${query.produtoId}`} />
        <meta property="og:description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
        <meta property="og:url" content={`https://raw-lucasbargas.vercel.app/loja/produto/${query.produtoId}`} />
      </Head>

    <>
      <S.ProductContainer>
        <Container>
          <ProductNav />
          {products.filter(p => p.id === idRef ).map(p => (
            <S.ProductArea key={p.product}>
              <ProductSlider photos={p.photos}>
                <S.ProductionDesc>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum sem eros, vestibulum ultrices sem venenatis in. Fusce ut risus fermentum enim ornare blandit. Integer dapibus nulla sed tristique semper.</p>
                </S.ProductionDesc>
              </ProductSlider>

              <ProductDatas moreInfo={false} datas={p}>
                <ProductListDesc />
              </ProductDatas>
            </S.ProductArea>
          ))}
        </Container>
      </S.ProductContainer>
    </>
 </>
  )
}

export default Product;
