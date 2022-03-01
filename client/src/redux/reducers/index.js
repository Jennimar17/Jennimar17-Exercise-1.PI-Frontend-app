import { combineReducers } from "redux";
import { phoneReducer } from "./phoneReducer.js";
const reducers = combineReducers({
  allPhones: phoneReducer
});
export default reducers;
