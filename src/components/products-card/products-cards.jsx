import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  ImageContainer,
  FooterContainer,
} from "./products-card.styles";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const ProductsCards = ({ product }) => {
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
            {" "}
            <TbCurrencyNaira /> {price}
          </Price>
        </Footer>
        <AiOutlineShoppingCart size={32} />
      </FooterContainer>
    </ProductCartContainer>
  );
};

export default ProductsCards;
