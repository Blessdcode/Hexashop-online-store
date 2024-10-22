import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { getMensCategories } from "../../utils/firebase.config";
import { setMenCategories } from "../../store/mens/mens.action";
import MensCategories from "../mens-category/mens-category";
import MensPreview from "../mens-preview/mens-preview";
import { MensContainer } from "./mens-shop.style";

const MensShop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const mens = await getMensCategories("mens");
      dispatch(setMenCategories(mens));

    };

    getCategoriesMap();
  }, []);

  return (
    <MensContainer>
      <Routes>
        <Route index element={<MensPreview />} />
        <Route path=":mens" element={<MensCategories />} />
      </Routes>
    </MensContainer>
  );
};

export default MensShop;
