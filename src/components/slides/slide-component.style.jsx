import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 90vh;
  margin: 50px auto;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
  height: 90vh;
  background-position: center;
  /* opacity:.8; */
`;

export const Title = styled.h2`
  font-size: 4rem;
  text-align: center;
  color: #fff;
  font-weight: 500;
  padding: 20px;
`;

export const SpanEl = styled.span`
  font-weight: 300;
  color: #fff;
  width: 50%;
  text-align: center;
  @media (max-width: 756px) {
    width: 100%;
  }
`;
