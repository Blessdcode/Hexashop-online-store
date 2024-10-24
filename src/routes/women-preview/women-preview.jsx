import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/women/women.selector";

import WomenCategory from "../../components/women-category/women-category";

import Spinner from "../../components/spinner/spinner";

const WomensPreview = () => {
  const womensCategoriesMap = useSelector(selectCategoriesMap);

  if (!womensCategoriesMap || Object.keys(womensCategoriesMap).length === 0) {
    return <Spinner />;
  }
  return (
    <>
      {Object.keys(womensCategoriesMap).map((title) => {
        const products = womensCategoriesMap[title];

        return <WomenCategory key={title} title={title} products={products} />;
      })}
    </>
  );
};

export default WomensPreview;
