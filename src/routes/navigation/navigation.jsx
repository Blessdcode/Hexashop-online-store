import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import CartIcon from "../../components/cart-icon/cart-icon";

// import { signOutUser } from "../../utils/firebase.config";
import { selectCurrentUser } from "../../store/user/user.selector";
import Profile from "../../components/profile/profile-components";
import Footer from "../../components/footer/footer-component";
import MenNavLinks from "../../components/mens-links/men-links";

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
import { ImCancelCircle } from "react-icons/im";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCartOpen = () => {
    setIsCartOpen((prevState) => !prevState);
  };
  const toggleOpen = () => setIsOpen((prevState) => !prevState);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <Fragment>
      <Container>
        <LogoContainer to="/">
          <img src={logo} alt="image" />
        </LogoContainer>
        <CartIconContainer>
          {currentUser ? <Profile /> : <NavLink to="/auth">Sign Up</NavLink>}
          <CartIcon onClick={toggleCartOpen} />
          <HamburgerIcon onClick={toggleMenu}>&#9776;</HamburgerIcon>
        </CartIconContainer>

        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="mens">Mens</NavLink>
          <NavLink to="/womens">womens</NavLink>
          <NavLink to="/accessories">accessories</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <CartIcon onClick={toggleCartOpen} />
          {currentUser ? <Profile /> : <NavLink to="/auth">Sign Up</NavLink>}
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </Container>
      {isOpen && (
          <MenNavLinks />
      )}
      {isMenuOpen && (
        <>
          {isOpen && <MenNavLinks />}

          <MobileMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink onClick={toggleOpen}>Mens</NavLink>
            <NavLink to="/womens">womens</NavLink>
            <NavLink to="/accessories">accessories</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {/* {currentUser ? <Profile /> : <NavLink to="/auth">Sign Up</NavLink>} */}
          </MobileMenu>
          {isOpen && (
            <ImCancelCircle
              className="absolute right-4 top-16 text-text z-[200]"
              size={24}
              onClick={toggleOpen}
            />
          )}
        </>
      )}
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
