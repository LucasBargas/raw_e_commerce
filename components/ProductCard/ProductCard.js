import Link from 'next/link';
import * as S from './ProductCard.styles';
import Image from 'next/image';

const ProductCard = ({ href, id, p, props }) => {
  return (
    <S.ProductCardContainer id={id} {...props}>
      <figure>
        <Link href={href}>
          <a>
            {p.photos.map((photo, index) => (
              <Image key={photo.title} src={photo.src} alt={photo.title} />
            ))}
          </a>
        </Link>
        
        <S.FastVisualization>
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
