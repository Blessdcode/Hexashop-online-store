import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

import ProductsCards from "../products-card/products-cards";

const CategoryPreview = ({ products, title }) => {
  return (
    <CategoryPreviewContainer>
      <Title to={title}>{title.toUpperCase()}</Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductsCards key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;