import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import CartIcon from "../../components/cart-icon/cart-icon";

// import { signOutUser } from "../../utils/firebase.config";
import { selectCurrentUser } from "../../store/user/user.selector";
import Profile from '../../components/profile/profile-components'

import {
  Container,
  NavLinks,
  NavLink,
  LogoContainer,
  HamburgerIcon,
  MobileMenu,
  CartIconContainer,
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
          <CartIcon onClick={toggleCartOpen} />
          <HamburgerIcon onClick={toggleMenu}>&#9776;</HamburgerIcon>
        </CartIconContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <CartIcon onClick={toggleCartOpen} />
          {currentUser ? (
            <Profile/>
          ) : (
            <NavLink to="/auth">Sign Up</NavLink>
          )}
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </Container>
      {isMenuOpen && (
        <MobileMenu>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/auth">Sign Up</NavLink>
        </MobileMenu>
      )}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
