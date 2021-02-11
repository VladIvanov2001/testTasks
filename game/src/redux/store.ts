import { combineReducers, createStore } from 'redux';
import { isHover } from './reducers/reduce';

export function rootReducer(){
  return combineReducers({
    isHover
  })
}

export const store = createStore(rootReducer());
