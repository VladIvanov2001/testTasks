import {createStore} from "redux";

export const initialState = {
    arr: [],
};

export function rootReducer(state = initialState) {
    return state;
}

export const store = createStore(
 rootReducer, initialState
);
