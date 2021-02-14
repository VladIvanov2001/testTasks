export const SET_IS_HOVER = 'SET_IS_HOVER';

export const setHoverIsTrue = (unitID:number) => ({
  type: SET_IS_HOVER,
  payload: unitID,
});
