import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  
  @media (max-width:768px) {
   display:flex;
   flex-wrap: wrap;
      
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;


export const Btn = styled.p`
  text-transform: capitalize;
  cursor: pointer;
`;