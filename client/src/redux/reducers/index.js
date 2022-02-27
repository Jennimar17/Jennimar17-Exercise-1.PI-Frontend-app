import { combineReducers } from "redux";
import { phoneReducer, selectedPhoneReducer } from "./phoneReducer.js";
const reducers = combineReducers({
  allPhones: phoneReducer,
  phones: selectedPhoneReducer,
});
export default reducers;
