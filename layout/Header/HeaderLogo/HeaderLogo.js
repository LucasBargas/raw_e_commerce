import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../public/images/logo.PNG';

const HeaderLogo = () => {
  return (
    <Link href='/'>
      <a>
        <Image src={logoImg} alt='Logo Raw' width='100px' height='43px' priority />
      </a>
    </Link>
  )
}

export default HeaderLogo;
