import ActionTypes from "../constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      name: "Sheru Sharma",
      occupation: "Gaurd Dog AKA Bhai",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    case ActionTypes.SELECTED_PRODUCT:
      return state;
    default:
      return state;
  }
};
