import { useSelector } from "react-redux";
// import { useContext } from "react";

import { selectCategoriesMap } from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview";
// import { CategoriesContext } from "../../context/products.context"; 


const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  
   if (!categoriesMap || Object.keys(categoriesMap).length === 0) {
     return <div>Loading...</div>; // Show loading message if data is not yet loaded
   }

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
