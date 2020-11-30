import { initialState } from "../store"

export const setArrForSearch = (newArr) => {
  return {
    type: "SET_SEARCH_ARR",
    payload: newArr,
  }
}

export const searchTags = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "SET_SEARCH_ARR": {
      return {
        ...state,
        arr: action.payload,
      }
    }
    default:
      return state
  }
}
