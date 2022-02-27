import { ActionTypes } from "../constant/actions-types.js";

export const setPhones = (phones) => {
  return {
    type: ActionTypes.SET_PHONES,
    payload: phones,
  };
};

export const selectedPhones = (phones) => {
  return {
    type: ActionTypes.SELECTED_PHONE,
    payload: phones,
  };
};
