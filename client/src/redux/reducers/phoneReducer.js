import { ActionTypes } from "../constant/actions-types.js";
const intialState = {
  phones: [],
};

export const phoneReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PHONES:
      return { ...state, phones: payload };
    default:
      return state;
  }
};

export const selectedPhoneReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PHONE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
