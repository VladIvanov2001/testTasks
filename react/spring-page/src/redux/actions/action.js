import {initialState} from "../store";

export const setArrForSearch = (newArr) =>{
return {
    // eslint-disable-next-line no-undef
    type: SET_SEARCH_ARR,
    payload: newArr
};
};

export const searchTags = (state = initialState, action) => {
    switch (action.type) {
        // eslint-disable-next-line no-undef
        case SET_SEARCH_ARR: {
            return {
                ...state,
                setArrForSearch: action.payload,
            };
        }
        default:
            return state;
    }
};
