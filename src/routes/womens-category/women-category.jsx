import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate,  } from "react-router-dom";


import { selectCategoriesMap } from "../../store/women/women.selector";

import WomenCards from "../../components/womens-card/womens-card";
import Spinner from "../../components/spinner/spinner";

import { CategoryContainer, Title,Btn } from "./women-category.styles";

const WomenCategories = () => {
  const navigate = useNavigate();
  const { womens } = useParams();
  const womenCategoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(womenCategoriesMap[womens]);
  console.log(womenCategoriesMap);

  useEffect(() => {
    setProducts(womenCategoriesMap[womens]);
  }, [womens, womenCategoriesMap]);

  if (!womenCategoriesMap) {
    return <Spinner />;
  }
  return (
    <>
      <Title>{womens.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <WomenCards key={product.id} product={product} />
          ))}
      </CategoryContainer>
      <Btn onClick={() => navigate(-1)}>go back</Btn>
    </>
  );
};

export default WomenCategories;
