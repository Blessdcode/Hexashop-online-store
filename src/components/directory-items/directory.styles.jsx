import styled from "styled-components";

export const DirectoryContainer = styled.div`
  margin-top: 24px;
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 10px;

  @media (max-width: 756px) {
    margin-top: 10px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 756px) {
    height: 340px;
  }
`;

export const ImageBody = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #4a4a4a;
  opacity: 0.7;
  position: absolute;
  overflow: hidden;

  h2 {
    opacity: 1;
    font-weight: bold;
    margin: 5px;
    font-size: 22px;
    color: #fff;
    text-transform: uppercase;
  }

  p {
    font-weight: medium;
    color: #ffff;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  position: relative;
  height: 440px;
  width:450px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
  &:hover {
    cursor: pointer;

    ${ImageBody} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    ${Body} {
      opacity: 0.7;
      background-color: black;
      h2 {
        color: #fff;
      }
    }
  }

  @media (max-width: 756px) {
    height: 100%;
  }
`;
