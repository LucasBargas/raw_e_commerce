import Head from "next/head";
import * as S from "../../styles/Contact.styles";
import Container from "../../styles/Container";
import ContactInfos from '../../components/ContactInfos/ContactInfos';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Projetos Lucas Bargas - Raw | Contato</title>
        <meta name="description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucas Bargas - Raw | Contato" />
        <meta property="og:description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
        <meta property="og:url" content="https://raw-lucasbargas.vercel.app/contato" />
      </Head>

      <>
        <S.ContactContainer>
          <Container>
            <S.ContactArea>
              <ContactInfos />
              <ContactForm />
            </S.ContactArea>
          </Container>
        </S.ContactContainer>
      </>
    </>
  )
}

export default Contact;
