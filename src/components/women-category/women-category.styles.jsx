import styled from "styled-components";

import { Link } from "react-router-dom";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px 20px;
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  color: black;
  font-weight: 500;
  width: 30%;

  @media (max-width: 786px) {
    font-size: 16px;
  }
`;

export const Preview = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 30px;

  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px; */

  /* @media(max-width:768px){

  } */
`;
