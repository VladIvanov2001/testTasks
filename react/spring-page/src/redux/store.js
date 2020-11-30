import { combineReducers, createStore } from 'redux';
import { searchTags } from './actions/action';

export const initialState = {
  arr: [],
};

export function rootReducer() {
  combineReducers({
    searchTags,
  });
}

export const store = createStore(rootReducer);
