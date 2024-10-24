import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { selectCategoriesMap } from "../../store/mens/men.selector";

import MensCards from "../../components/mens-card/mens-cards";
import Spinner from "../../components/spinner/spinner";

import { CategoryContainer, Title,Btn } from "./mens-category.styles";

const MensCategories = () => {
  const navigate = useNavigate();
  const { mens } = useParams();
  const menCategoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(menCategoriesMap[mens]);

  useEffect(() => {
    setProducts(menCategoriesMap[mens]);
  }, [mens, menCategoriesMap]);

  if (!menCategoriesMap) {
    return <Spinner />;
  }
  return (
    <>
      <Title>{mens.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <MensCards key={product.id} product={product} />
          ))}
      </CategoryContainer>
       <Btn onClick={() => navigate(-1)}>go back</Btn>
    </>
  );
};

export default MensCategories;
