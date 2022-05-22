import Head from "next/head";
import * as S from '../../styles/AboutUs';
import Container from '../../styles/Container';
import Image from "next/image";
import TitleSection from '../../components/TitleSection/TitleSection';
import fig from '../../public/images/more_imgs/img_1.png';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Projetos Lucas Bargas - Raw | Quem Somos</title>
        <meta name="description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucas Bargas - Raw | Quem Somos" />
        <meta property="og:description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
        <meta property="og:url" content="https://raw-lucasbargas.vercel.app/quem-somos" />
      </Head>

      <>
        <S.AboutUsContainer>
          <Container>
            <S.AboutUsArea>
              <S.AboutUsText>
                <TitleSection>Quem Somos</TitleSection>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptates officiis, corporis quis reiciendis aut. Similique, harum delectus esse laboriosam temporibus beatae aperiam cupiditate neque? Accusantium, eos? Sequi, provident amet?</p>
                <p>Nulla sit amet tellus ac dolor pretium pharetra. Curabitur eget augue placerat nisl maximus blandit eget vel augue. Cras dignissim sit amet urna a ultricies. Maecenas gravida ex metus, nec condimentum nulla convallis pretium. Vivamus a rhoncus justo, quis hendrerit libero. Donec elit erat, ullamcorper feugiat feugiat vel, aliquet non nunc. Vestibulum rutrum feugiat neque, vel pretium nisi tincidunt eget. Vestibulum ac mauris id lorem venenatis pharetra non id turpis.</p>
              </S.AboutUsText>
              <S.AboutUsFig>
                <Image src={fig} alt='Quem Somos - Foto' />
              </S.AboutUsFig>
            </S.AboutUsArea>
          </Container>
        </S.AboutUsContainer>
      </>
    </>
  )
}

export default AboutUs;
