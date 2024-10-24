import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 350px;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  border: 1px solid #000;
  border-radius: 20px;
  margin-bottom: 45px;
  padding: 12px;
  text-transform: capitalize;
`;

export const ImageContainer = styled.div`
  width: 350px;
  height: 450px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    margin-bottom: 5px;
    border-radius: 20px 20px 0 0;
    &:hover {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      cursor: pointer;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  flex-direction: column;
`;

export const FooterContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.h3`
  width: 100%;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  font-weight: bold;
`;
