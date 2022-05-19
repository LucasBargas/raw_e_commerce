import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../public/images/logo.PNG';
import HeaderLogoContainer from './HeaderLogo.styles';

const HeaderLogo = () => {
  return (
    <HeaderLogoContainer>
      <Link href='/'>
        <a>
          <Image src={logoImg} alt='Logo Raw' width='100px' height='43px' priority />
        </a>
      </Link>
    </HeaderLogoContainer>
  )
}

export default HeaderLogo;
