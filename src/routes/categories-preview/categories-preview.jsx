import { useSelector } from "react-redux";
// import { useContext } from "react";

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview";
// import { CategoriesContext } from "../../context/products.context";

import Spinner from "../../components/spinner/spinner";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  //  if (!categoriesMap || Object.keys(categoriesMap).length === 0) {
  //    return <Spinner/>
  //  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
