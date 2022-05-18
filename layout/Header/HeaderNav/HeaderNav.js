import HeaderCart from "./HeaderCart/HeaderCart";
import HeaderNavContainer from "./HeaderNav.styles";
import HeaderNavBar from "./HeaderNavBar/HeaderNavBar";

const HeaderNav = () => {
  return (
    <HeaderNavContainer>
      <HeaderNavBar />
      <HeaderCart />
    </HeaderNavContainer>
  )
}

export default HeaderNav;