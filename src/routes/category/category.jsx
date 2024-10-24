import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import ProductsCards from "../../components/products-card/products-cards";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";

import Spinner from "../../components/spinner/spinner";

import { CategoryContainer, Title, Btn } from "./category.styles";

const Category = () => {
const navigate = useNavigate();
  const { category } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductsCards key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
      <Btn onClick={() => navigate(-1)}>go back</Btn>
    </>
  );
};

export default Category;
