import { createContext, useState, useEffect } from "react";

import { MENS,WOMENS,TRANDING } from "../../src/shop-data";

import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
  addDataToFirestore,
} from "../utils/firebase.config";

export const CategoriesContext = createContext({
  categoriesMap: {},
});
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  // useEffect(() => {
  //   addDataToFirestore("tranding", TRANDING);
  // }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
