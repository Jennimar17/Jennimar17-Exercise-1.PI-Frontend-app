import { ActionTypes } from "../constant/actions-types.js";

export const setPhones = (phones) => {
  return {
    type: ActionTypes.SET_PHONES,
    payload: phones,
  };
};

