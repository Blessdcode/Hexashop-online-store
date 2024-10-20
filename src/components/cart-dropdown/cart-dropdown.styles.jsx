import styled from "styled-components";

export const DropdownComponent = styled.div`
  position: absolute;
  width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 0px;
  right: 0px;
  z-index: 5;
  
  @media (max-width: 769px) {
    top: 55px;
    right: 40px;
    height: 340px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
`;
