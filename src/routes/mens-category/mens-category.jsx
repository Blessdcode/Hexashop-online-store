import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCategoriesMap } from "../../store/mens/men.selector";

import MensCards from "../../components/mens-card/mens-cards";

import { CategoryContainer, Title } from "./mens-category.styles";

const MensCategories = () => {
  const { mens } = useParams();
  const menCategoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(menCategoriesMap[mens]);

  useEffect(() => {
    setProducts(menCategoriesMap[mens]);
  }, [mens, menCategoriesMap]);
  return (
    <>
      
      <Title>{mens.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <MensCards key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default MensCategories;
