// eslint-disable-next-line import/named
import { SET_IS_LOGIN } from '../actions/action';

export const initialLoginState = {
  isLogin: false,
};

export const isLogin = (state = initialLoginState, action) => {
  switch (action.type) {
    case SET_IS_LOGIN: {
      return {
        ...state,
        isLogin: true,
      };
    }
    default:
      return state;
  }
};
