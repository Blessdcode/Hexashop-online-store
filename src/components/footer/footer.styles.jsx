import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  align-items: flex-end;
  padding: 15px;
   @media (max-width: 786px) {
    flex-direction: column;
    align-items: flex-start;
  }
  margin-top: 34px;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  background:#fff;
  padding:8px;
  border-radius:30px
`;
export const Name = styled.h1`
  font-weight: bold;
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 786px) {
    /* display:flex; */
    flex-wrap: wrap;
  }
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 356px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 50%;
`;
