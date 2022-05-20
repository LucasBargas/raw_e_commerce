import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as S from './HeaderNavBar.styles';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const navBarLinks = [
  { title: 'Início', path: '/' },
  { title: 'Loja', path: '/loja' },
  { title: 'Quem Somos', path: '/quem-somos' },
  { title: 'Contato', path: '/contato' },
  { title: 'Blog', path: '/blog' },
];

const NavBar = () => {
  const { pathname } = useRouter();
  const [menu, setMenu] = useState(false);

  const handleMenuMobile = ({ target }) => {
    if (target.closest('button')) setMenu(!menu);
  }

  const handleClickOnLink = () => setMenu(false);

  useEffect(() => {
    const handleOutsideClick = ({ target }) => {
      if (menu) {
        if (!target.closest('nav#headerNavBar') && !target.closest('button#openMenuMobile')) {
          setMenu(false);
        }
      }
    }

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [menu])

  return (
    <S.NavBarArea menu={menu}>
      <nav id='headerNavBar'>
        <S.NavBarCloseMobile>
          <button onClick={handleMenuMobile}>
            <IoClose />
          </button>
        </S.NavBarCloseMobile>

        <ul>
          {navBarLinks.map(({ title, path }) => (
            <li key={title}>
              <Link href={path}>
                <a onClick={handleClickOnLink} className={pathname === path ? 'activeLink' : ''}>{title}</a>
              </Link>
            </li>
          ))}
        </ul>

        <S.NavBarMedias>
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaPinterest />
          <FaInstagram />
        </S.NavBarMedias>
      </nav>

      <S.NavBarOpenMobile>
        <button id='openMenuMobile' onClick={handleMenuMobile}>
          <BiMenu />
        </button>
      </S.NavBarOpenMobile>
    </S.NavBarArea>
  )
}

export default NavBar;
