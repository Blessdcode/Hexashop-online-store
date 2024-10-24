import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import CartIcon from "../../components/cart-icon/cart-icon";

// import { signOutUser } from "../../utils/firebase.config";
import { selectCurrentUser } from "../../store/user/user.selector";
import Profile from "../../components/profile/profile-components";
import Footer from "../../components/footer/footer-component";

import {
  Container,
  NavLinks,
  LogoContainer,
  HamburgerIcon,
  MobileMenu,
  CartIconContainer,
  NavBarLink

} from "./navigation.styles";
import { logo } from "../../assets";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartOpen = () => {
    setIsCartOpen((prevState) => !prevState);
  };
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <Fragment>
      <Container>
        <LogoContainer to="/">
          <img src={logo} alt="image" />
        </LogoContainer>
        <CartIconContainer>
          {currentUser ? (
            <Profile />
          ) : (
            <NavBarLink to="/auth">Sign Up</NavBarLink>
          )}
          <CartIcon onClick={toggleCartOpen} />
          <HamburgerIcon onClick={toggleMenu}>&#9776;</HamburgerIcon>
        </CartIconContainer>

        <NavLinks>
          <NavBarLink to="/">Home</NavBarLink>
          <NavBarLink to="mens">Mens</NavBarLink>
          <NavBarLink to="/womens">womens</NavBarLink>
          <NavBarLink to="/shop">Shop</NavBarLink>
          <NavBarLink to="/about">About us</NavBarLink>
          <NavBarLink to="/contact">Contact</NavBarLink>
          <CartIcon onClick={toggleCartOpen} />
          {currentUser ? (
            <Profile />
          ) : (
            <NavBarLink to="/auth">Sign Up</NavBarLink>
          )}
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </Container>
      {isMenuOpen && (
        <MobileMenu>
          <NavBarLink to="/">Home</NavBarLink>
          <NavBarLink to="/mens">Mens</NavBarLink>
          <NavBarLink to="/womens">womens</NavBarLink>
          <NavBarLink to="/shop">Shop</NavBarLink>
          <NavBarLink to="/about">About Us</NavBarLink>
          <NavBarLink to="/contact">Contact</NavBarLink>
          {/* {currentUser ? <Profile /> : <NavLink to="/auth">Sign Up</NavLink>} */}
        </MobileMenu>
      )}
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
