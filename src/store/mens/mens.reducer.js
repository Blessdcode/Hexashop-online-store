import { MENS_CATEGORIES_ACTION_TYPE } from "./mens.types";

export const MENS_INITIAL_STATE = {
  mens: [],
  isLoading: false,
  error: null,
};

export const mensReducer = (state = MENS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case MENS_CATEGORIES_ACTION_TYPE.FETCH_MENS_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case MENS_CATEGORIES_ACTION_TYPE.FETCH_MENS_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        mens:payload
      };
    case MENS_CATEGORIES_ACTION_TYPE.FETCH_MENS_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      };

    default:
      return state;
  }
};
