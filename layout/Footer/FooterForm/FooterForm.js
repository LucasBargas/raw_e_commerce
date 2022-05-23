import * as S from './FooterForm.styles';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const FooterForm = () => {
  return (
    <S.FooterFormArea>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" required placeholder="Insira o seu email aqui*" />
        <button>Participar</button>
      </form>
      
      <S.FooterMedias>
        <li><FaFacebookF /></li>
        <li><FaInstagram /></li>
        <li><FaPinterest /></li>
        <li><FaYoutube /></li>
        <li><FaTwitter /></li>
      </S.FooterMedias>
    </S.FooterFormArea>
  )
}

export default FooterForm;
