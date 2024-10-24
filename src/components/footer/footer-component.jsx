import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
  AiOutlineTwitter,
  AiFillHome,
} from "react-icons/ai";

import { logo } from "../../assets";
const footerLinks = [
  {
    id: 1,
    title: "Home",
  },

  {
    id: 2,
    title: "Cart",
  },

  {
    id: 3,
    title: "Man Fashion",
  },

  {
    id: 4,
    title: "Woman Fashion",
  },

  {
    id: 5,
    title: "Accessories",
  },

  {
    id: 6,
    title: "My Account",
  },

  {
    id: 7,
    title: "Order Tracking",
  },

  {
    id: 8,
    title: "Wishlist",
  },

  {
    id: 9,
    title: "Terms",
  },
];

import {
  Container,
  Left,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  List,
  Right,
  ContactItem,
  Title,
  ListItem,
} from "./footer.styles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <img src={logo} alt="Logo" aria-label="LOGO" />
        </Logo>
        <Desc>
          This web application is only for education purpose.
        Images use was gotten online.
        </Desc>
      </Left>
      <Center>
        {/* <Title>Useful Links</Title> */}
        <List>
          {footerLinks.map((links) => (
            <ListItem key={links.id}>{links.title}</ListItem>
          ))}
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <AiFillHome style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <AiFillPhone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <AiFillMail style={{ marginRight: "10px" }} /> contact@lama.dev
        </ContactItem>
      </Right>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <AiFillFacebook />
        </SocialIcon>
        <SocialIcon color="E4405F">
          <AiFillInstagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
          <AiOutlineTwitter />
        </SocialIcon>
      </SocialContainer>
    </Container>
  );
};

export default Footer;
