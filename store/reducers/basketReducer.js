import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../types/basketTypes";

const initialState = {
 basket: [],
};

const basketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_BASKET:
      return { ...state, basket: payload };
    case REMOVE_FROM_BASKET:
      return { ...state, basket: payload };
    default:
      return state;
  }
};

export default basketReducer;
