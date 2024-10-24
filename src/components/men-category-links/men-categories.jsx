import MensCards from "../mens-card/mens-cards";

import {
  PreviewContainer,
  Title,
  Preview,
} from './men-category.styles'
import { MdArrowForwardIos } from "react-icons/md";


const MenCategory = ({ products, title }) => {
  return (
    <PreviewContainer>
      <Title to={title}>{title.toUpperCase()}<MdArrowForwardIos/> </Title>

      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <MensCards key={product.id} product={product} />
          ))}
      </Preview>
    </PreviewContainer>
  );
};

export default MenCategory;
