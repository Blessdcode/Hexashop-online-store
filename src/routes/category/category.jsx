import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductsCards from "../../components/products-card/products-cards";
import { selectCategoriesMap } from "../../store/categories/category.selector";

// import {CategoriesContext} from '../../context/products.context'
import {CategoryContainer, Title} from "./category.styles";

const Category = () => {
  // const {categoriesMap} = useContext(CategoriesContext);
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductsCards key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category
