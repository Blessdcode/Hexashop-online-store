import { WOMENS_CATEGORIES_ACTION_TYPE } from "./women.types";

export const WOMENS_INITIAL_STATE = {
  womens: [],
  isLoading: false,
  error: null,
};

export const womensReducer = (state = WOMENS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case WOMENS_CATEGORIES_ACTION_TYPE.FETCH_WOMENS_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case WOMENS_CATEGORIES_ACTION_TYPE.FETCH_WOMENS_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        womens: payload,
      };
    case WOMENS_CATEGORIES_ACTION_TYPE.FETCH_WOMENS_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
