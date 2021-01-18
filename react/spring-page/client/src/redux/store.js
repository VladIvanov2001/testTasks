import { combineReducers, createStore } from 'redux';
import { isLogin } from './reducers/reduce';

export function rootReducer() {
  return combineReducers({
    isLogin,
  });
}

export const store = createStore(rootReducer());
