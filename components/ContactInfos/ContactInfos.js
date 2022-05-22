import * as S from './ContactInfos.styles';

const ContactInfos = () => {
  return (
    <S.ContactInfosContainer>
      <S.ContactsInfosWeb>
        <h3>Atendimento ao cliente</h3>
        <p>Tel: (11) 3456-7890</p>
        <p>Email: info@meusite.com</p>
      </S.ContactsInfosWeb>

      <S.ContactInfosPartners>
        <h3>Revendores</h3>
        <p><strong>Kool++</strong> | Av. Bernardino de Campos, 98 - São Paulo - SP 12345-678</p>
        <p><strong>Sem Limites</strong> | Av. Bernardino de Campos, 98 - São Paulo - SP 12345-678</p>
        <p><strong>Geração 10</strong> | Av. Bernardino de Campos, 98 - São Paulo - SP 12345-678</p>
        <p><strong>Urbanoide</strong> | Av. Bernardino de Campos, 98 - São Paulo - SP 12345-678</p>
        <p><strong>Surf e Co.</strong> | Av. Bernardino de Campos, 98 - São Paulo - SP 12345-678</p>
        <p><strong>Vitorin</strong> | Av. Bernardino de Campos, 98 - São Paulo - SP 12345-678</p>
      </S.ContactInfosPartners>
    </S.ContactInfosContainer>
  )
}

export default ContactInfos;
