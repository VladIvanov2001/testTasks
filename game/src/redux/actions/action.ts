export const SET_IS_HOVER = 'SET_IS_HOVER';

export const setHoverIsTrue = (isHover:boolean) => ({
  type: SET_IS_HOVER,
  payload: isHover,
});
