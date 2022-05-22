import * as S from './HomeInsta.styles';
import Container from '../../styles/Container';
import TitleSection from '../TitleSection/TitleSection';
import photoOne from '../../public/images/photos/photo_1.png';
import photoTwo from '../../public/images/photos/photo_2.png';
import photoThree from '../../public/images/photos/photo_3.png';
import photoFour from '../../public/images/photos/photo_4.png';
import photoFive from '../../public/images/photos/photo_5.png';
import photoSix from '../../public/images/photos/photo_6.png';
import photoSeven from '../../public/images/photos/photo_7.png';
import photoEight from '../../public/images/photos/photo_8.png';
import photoNine from '../../public/images/photos/photo_9.png';
import photoTen from '../../public/images/photos/photo_10.png';
import photoEleven from '../../public/images/photos/photo_11.png';
import photoTwelve from '../../public/images/photos/photo_12.png';
import Image from 'next/image';

const HomeInsta = () => {
  return (
    <S.HomeInstaContainer>
      <Container>
        <TitleSection>#Instagram</TitleSection>

        <S.HomeInstaArea>
          <figure>
            <Image src={photoOne} alt='Photo Instagram - Um' />
          </figure>
          <figure>
            <Image src={photoTwo} alt='Photo Instagram - Dois' />
          </figure>
          <figure>
            <Image src={photoThree} alt='Photo Instagram - Três' />
          </figure>
          <figure>
            <Image src={photoFour} alt='Photo Instagram - Quatro' />
          </figure>
          <figure>
            <Image src={photoFive} alt='Photo Instagram - Cinco' />
          </figure>
          <figure>
            <Image src={photoSix} alt='Photo Instagram - Seis' />
          </figure>
          <figure>
            <Image src={photoSeven} alt='Photo Instagram - Sete' />
          </figure>
          <figure>
            <Image src={photoEight} alt='Photo Instagram - Oito' />
          </figure>
          <figure>
            <Image src={photoNine} alt='Photo Instagram - Nove' />
          </figure>
          <figure>
            <Image src={photoTen} alt='Photo Instagram - Dez' />
          </figure>
          <figure>
            <Image src={photoEleven} alt='Photo Instagram - Onze' />
          </figure>
          <figure>
            <Image src={photoTwelve} alt='Photo Instagram - Doze' />
          </figure>
        </S.HomeInstaArea>
      </Container>
    </S.HomeInstaContainer>
  )
}

export default HomeInsta;
