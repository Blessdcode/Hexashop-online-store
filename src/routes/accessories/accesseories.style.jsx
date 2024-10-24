// accessoeries.style.js
import styled from "styled-components";

export const ItemImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 20px;
  margin: 20px auto;
  max-width: 900px;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &:hover {
    cursor: pointer;


  }
`;

export const ItemCard = styled.div`
  
  padding: 15px;
  margin: 10px;
  min-width: 270px;
  border: 1px solid #000;
  border-radius: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 20px 0;
`;

export const ItemName = styled.h2`
  display: flex;
  align-items: center;
  font-size: 21px;
  cursor: pointer;
  color: black;
  font-weight: 500;
  text-transform: capitalize;
`;

export const ItemPrice = styled.p`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const Footer = styled.div`
  margin: 16px 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;