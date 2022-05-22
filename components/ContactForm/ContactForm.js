import * as S from './ContactForm.styles';
import TitleSection from '../TitleSection/TitleSection';

const ContactForm = () => {
  return (
    <S.ContactFormContainer>
      <TitleSection>Nos mande uma mensagem</TitleSection>
      <S.ContactFormArea onSubmit={e => e.preventDefault()}>
        <input required="" type="text" placeholder="Nome" />
        <input required="" type="text" placeholder="Sobrenome" />
        <input required="" type="text" placeholder="Assunto" />
        <textarea placeholder="Digite sua mensagem aqui..." />
        <S.ContactFormSend>
          <button>Enviar</button>
        </S.ContactFormSend>
      </S.ContactFormArea>
    </S.ContactFormContainer>
  )
}

export default ContactForm;
