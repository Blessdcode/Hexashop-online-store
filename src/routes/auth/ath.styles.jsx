import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthComponent = styled.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 70px;
  flex-wrap: wrap;
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
