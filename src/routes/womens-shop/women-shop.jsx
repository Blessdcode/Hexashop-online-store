import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

// import { getMensCategories } from "../../utils/firebase.config";

import { fetchWomensStartAsync } from "../../store/women/women.action";

import WomensCategories from "../womens-category/women-category";
import WomensPreview from "../women-preview/women-preview";
import { WomensContainer } from "./womens-shop.style";

const WomensShop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWomensStartAsync());
  }, []);

  return (
    <WomensContainer>
      <Routes>
        <Route index element={<WomensPreview />} />
        <Route path=":womens" element={<WomensCategories />} />
      </Routes>
    </WomensContainer>
  );
};

export default WomensShop;
