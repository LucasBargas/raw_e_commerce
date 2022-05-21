import React, {useContext} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './ProductDatas.styles';
import ProductForm from './ProductForm/ProductForm';
import { UserContext } from '../../../utils/Context';

const ProductDatas = ({ datas, children }) => {
  const { setIdRef } = useContext(UserContext);
  const { pathname } = useRouter();

  return (
    <S.ProductDatasContainer>
      <h2>{datas.product}</h2>
      <span>SKU: {datas.sku}</span>
      <p>R$ {datas.price.toString().replace('.', ',')}</p>
      <ProductForm datas={datas} />
        {pathname !== `/loja/produto/${datas.id}` && (
          <S.LinkToShow>
            <Link href={`/loja/produto/${datas.id}`}>
              <a onClick={() => setIdRef(undefined)}>Ver mais informações</a>
            </Link>
          </S.LinkToShow>
        )}
        {children}
    </S.ProductDatasContainer>
  )
}

export default ProductDatas;
