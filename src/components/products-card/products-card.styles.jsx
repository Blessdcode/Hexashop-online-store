import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  height: 450px;
  align-items: center;
  position: relative;
  /* border:1px solid #000; */
  margin-bottom: 15px;
  text-transform: capitalize;

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    object-position:center;
    margin-bottom: 5px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  flex-direction: column;
`;

export const Name = styled.span`
  width: 100%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
