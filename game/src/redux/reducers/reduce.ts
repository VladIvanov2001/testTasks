import { SET_IS_HOVER } from '../actions/action';
import { IsActiveHover } from '../../types/types';

export const initialHoverState = {
  isHover: false
}

export const isHover = (state = initialHoverState, action:IsActiveHover) =>{
    switch (action.type){
      case 'SET_IS_HOVER':{
        return {
          ...state,
          payload:action.isHover,
        };
      }
      default:
        return state;
    }
};
