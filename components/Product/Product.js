import * as S from './Product.styles';
import { useRouter } from 'next/router';
import ProductDatas from './ProductDatas/ProductDatas';
import ProductSlider from './ProductSlider/ProductSlider';

const Product = ({ photos, datas }) => {
  const { pathname } = useRouter();
  
  return (
    <S.ProductContainer home={pathname !== `/loja/produto/${datas.id}`}>
      <ProductSlider photos={photos} />
      <ProductDatas datas={datas} />
    </S.ProductContainer>
  )
}

export default Product;
