import Link from 'next/link';
import * as S from './FooterNav.styles';

const FooterNav = () => {
  return (
    <S.FooterNavArea>
      <nav>
        <ul>
          <li><Link href='/loja'><a>Loja</a></Link></li>
          <li><Link href='/contato'><a>Revendedores</a></Link></li>
          <li><Link href='/quem-somos'><a>Quem somos</a></Link></li>
          <li><Link href='/contato'><a>Contato</a></Link></li>
        </ul>
      </nav>

      <nav>
        <ul>
          <li><Link href='/'><a>FAQ</a></Link></li>
          <li><Link href='/contato'><a>Envio e devoluções</a></Link></li>
          <li><Link href='/contato'><a>Políticas da loja</a></Link></li>
          <li><Link href='/contato'><a>Métodos de pagamento</a></Link></li>
        </ul>
      </nav>
    </S.FooterNavArea>
  )
}

export default FooterNav;
