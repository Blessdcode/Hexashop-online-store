import { MENS_CATEGORIES_ACTION_TYPE } from "./mens.types";

export const MENS_INITIAL_STATE = {
  mens: [],
  isLoading: false,
  error: null,
};

export const mensReducer = (state = MENS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case MENS_CATEGORIES_ACTION_TYPE.SET_MENS:
      return {
        ...state,
        mens: payload,
      };

    default:
      return state;
  }
};
