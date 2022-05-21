import React, {useContext} from 'react';
import Link from 'next/link';
import * as S from './ProductCard.styles';
import Image from 'next/image';
import { UserContext } from "../../utils/Context";

const ProductCard = ({ href, id, p, props }) => {
  const { setIdRef } = useContext(UserContext);

  const handleClick = ({ target }) => {
    const id = Number(target.closest('div.productCard').id);
    setIdRef(id);
  }

  return (
    <S.ProductCardContainer className='productCard' id={id} {...props}>
      <figure>
        <Link href={href}>
          <a>
            {p.photos.map(photo => (
              <Image key={photo.title} src={photo.src} alt={photo.title} loading='lazy' />
            ))}
          </a>
        </Link>
        
        <S.FastVisualization onClick={handleClick}>
          <p>Visualização rápida</p>
        </S.FastVisualization>
      </figure>

      <S.ProductCardInfos>
        <Link href={href}>
          <a>
            <h3>{p.product}</h3>
            <p>R$ {p.price.toString().replace('.', ',')}</p>
          </a>
        </Link>
      </S.ProductCardInfos>
    </S.ProductCardContainer>
  )
}

export default ProductCard;
