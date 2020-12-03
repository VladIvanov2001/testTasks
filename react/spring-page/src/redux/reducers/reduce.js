// eslint-disable-next-line import/named
import { SET_SEARCH_ELEMENTS } from '../actions/action';

export const initialState = {
  arr: [],
};

export const searchTags = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_ELEMENTS: {
      return {
        ...state,
        arr: action.payload,
      };
    }
    default:
      return state;
  }
};
