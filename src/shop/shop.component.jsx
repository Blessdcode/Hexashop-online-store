import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// import { getCategoriesAndDocuments } from "../utils/firebase.config";

import { fetchCategoriesStartAsync } from "../store/categories/category.action";

import CategoriesPreview from "../routes/categories-preview/categories-preview";
import Category from "../routes/category/category";

import { ShopContainer } from "./shop.styles.jsx";

const Shop = () => {
  const dispatch = useDispatch();

 useEffect(() => {
   dispatch(fetchCategoriesStartAsync());
 }, []);

  return (
    <ShopContainer>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </ShopContainer>
  );
};

export default Shop;
