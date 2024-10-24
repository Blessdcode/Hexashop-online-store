import { WOMENS_CATEGORIES_ACTION_TYPE } from "./women.types";
import { createAction } from "../../utils/reducer/reducer.utils";

import { getWomensCategories } from "../../utils/firebase.config";

export const fetchWomensStart = () =>
  createAction(WOMENS_CATEGORIES_ACTION_TYPE.FETCH_WOMENS_CATEGORIES_START);

export const fetchWomensSuccess = (categoriesArray) =>
  createAction(
    WOMENS_CATEGORIES_ACTION_TYPE.FETCH_WOMENS_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchWomensFailure = (error) =>
  createAction(WOMENS_CATEGORIES_ACTION_TYPE.FETCH_WOMENS_CATEGORIES_FAILED, error);

export const fetchWomensStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchWomensStart());
    try {
      const categoriesArray = await getWomensCategories("womens");
      dispatch(fetchWomensSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchWomensFailure(error));
    }
  };
};

