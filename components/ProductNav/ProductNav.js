import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './ProductNav.styles';
import products from '../../utils/products';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

const ProductNav = () => {
  const { query } = useRouter();
  let idRef = Number(query.produtoId);

  return (
    <S.ProductNavContainer>
      <S.ProductNavLeft>
        <Link href='/'><a>Início</a></Link>
        <span>/</span>
        <Link href='/loja'><a>Loja</a></Link>
        <span>/</span>
        {products.filter(p => p.id === idRef ).map(p => (
          <p key={p.product}>{p.product}</p>
        ))}
      </S.ProductNavLeft>

      <S.ProductNavRight>
        <Link href={`/loja/produto/${idRef - 1}`}>
          <a className={idRef === 1 ? 'disable' : ''}>
            <BsChevronLeft />
            Anterior
          </a>
        </Link>

        <Link href={`/loja/produto/${idRef + 1}`}>
          <a className={idRef === products.length ? 'disable' : ''}>
            Próximo
            <BsChevronRight />
          </a>
        </Link>
      </S.ProductNavRight>
    </S.ProductNavContainer>
  )
}

export default ProductNav