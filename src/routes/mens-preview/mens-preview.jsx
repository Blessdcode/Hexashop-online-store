import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/mens/men.selector";

import MenCategory from "../../components/men-category-links/men-categories";

import Spinner from "../../components/spinner/spinner";

const MensPreview = () => {
  const mensCategoriesMap = useSelector(selectCategoriesMap);

  if (!mensCategoriesMap || Object.keys(mensCategoriesMap).length === 0) {
    return <Spinner />;
  }
  return (
    <>
      {Object.keys(mensCategoriesMap).map((title) => {
        const products = mensCategoriesMap[title];

        return <MenCategory key={title} title={title} products={products} />;
      })}
    </>
  );
};

export default MensPreview;
