import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  /* margin-bottom:30px; */

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const NavLinks = styled.div`
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: upperCase;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  height: 100%;
  /* width: 100%; */
  margin: 0 15px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0px;

    svg {
      width: 100px;
    }
  }
`;

export const NavBarLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #444;
  }
  &.active {
    color: #800000;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  padding: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const MobileMenu = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  position: absolute;
  // top: 60px;
  // left: -15px;
  background: black;
  color: #fff;
  z-index: 100;
  text-transform: upperCase;

  ${NavLink} {
    margin-bottom: 10px;
    color: #fff;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: 14px;

  
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const CartIconContainer = styled.div`
  display: none;
  @media (max-width: 769px) {
    display: flex;
    align-items: center;
  }
`;
