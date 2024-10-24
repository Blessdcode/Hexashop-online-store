import WomensCards from "../mens-card/mens-cards";

import { PreviewContainer, Title, Preview } from "./women-category.styles";
import { MdArrowForwardIos } from "react-icons/md";

const WomenCategory = ({ products, title }) => {
  return (
    <PreviewContainer>
      <Title to={title}>
        {title.toUpperCase()}
        <MdArrowForwardIos />{" "}
      </Title>

      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <WomensCards key={product.id} product={product} />
          ))}
      </Preview>
    </PreviewContainer>
  );
};

export default WomenCategory;
