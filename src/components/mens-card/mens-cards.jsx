import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  ImageContainer,
  FooterContainer,
} from "./mens-cards.styles";
import { TbCurrencyNaira } from "react-icons/tb";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MensCards = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <ProductCartContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <FooterContainer>
        <Footer>
          <Name>{name}</Name>
          <Price>
            <TbCurrencyNaira /> {price}
          </Price>
        </Footer>
        <AiOutlineShoppingCart size={32} />
      </FooterContainer>
    </ProductCartContainer>
  );
};

export default MensCards;
