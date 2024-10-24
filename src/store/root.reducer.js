import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { mensReducer } from "./mens/mens.reducer";
import {womensReducer} from './women/women.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  mens: mensReducer,
  womens:womensReducer,
});
