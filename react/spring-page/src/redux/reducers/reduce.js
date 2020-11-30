const SET_SEARCH_ARR = 'SET_SEARCH_ARR';

export const initialState = {
  arr: [],
};

export const searchTags = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_ARR: {
      return {
        ...state,
        arr: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setArrForSearch = (newArr) => ({
  type: 'SET_SEARCH_ARR',
  payload: newArr,
});
