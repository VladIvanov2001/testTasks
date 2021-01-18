export const SET_IS_LOGIN = 'SET_IS_LOGIN';

export const setLoginIsTrue = (userJWT) => ({
  type: SET_IS_LOGIN,
  payload: userJWT,
});
