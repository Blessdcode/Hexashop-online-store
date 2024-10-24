import { MENS_CATEGORIES_ACTION_TYPE  } from './mens.types';
import { createAction } from '../../utils/reducer/reducer.utils';

import { getMensCategories } from "../../utils/firebase.config";

export const fetchMensStart = () =>
  createAction(MENS_CATEGORIES_ACTION_TYPE.FETCH_MENS_CATEGORIES_START);

export const fetchMensSuccess = (categoriesArray) =>
  createAction(
   MENS_CATEGORIES_ACTION_TYPE.FETCH_MENS_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchMensFailure = (error) =>
  createAction(MENS_CATEGORIES_ACTION_TYPE.FETCH_MENS_CATEGORIES_FAILED, error);

export const fetchMensStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchMensStart());
    try {
      const categoriesArray = await getMensCategories("mens");
      dispatch(fetchMensSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchMensFailure(error));
    }
  };
};



// export const setMenCategories = (mens) => createAction(MENS_CATEGORIES_ACTION_TYPE.SET_MENS, mens)