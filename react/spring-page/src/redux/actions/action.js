import { initialState } from '../store';

export const setArrForSearch = (newArr) => ({
  type: 'SET_SEARCH_ARR',
  payload: newArr,
});

export const searchTags = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_ARR': {
      return {
        ...state,
        arr: action.payload,
      };
    }
    default:
      return state;
  }
};
