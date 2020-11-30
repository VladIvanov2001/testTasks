import { combineReducers, createStore } from 'redux';
import { searchTags } from './reducers/reduce';

export function rootReducer() {
  return combineReducers({
    searchTags,
  });
}

export const store = createStore(rootReducer());
