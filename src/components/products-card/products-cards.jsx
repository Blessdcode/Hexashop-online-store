import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./products-card.styles";

const ProductsCards = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />

      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductsCards;
