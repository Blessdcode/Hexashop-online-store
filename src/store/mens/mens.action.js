import { MENS_CATEGORIES_ACTION_TYPE } from "./mens.types";
import { createAction } from "../../utils/reducer/reducer.utils";




export const setMenCategories = (mens) => createAction(MENS_CATEGORIES_ACTION_TYPE.SET_MENS, mens)