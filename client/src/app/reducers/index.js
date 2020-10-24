import { combineReducers } from "redux";
import activeTripDetails from "./activeTripDetails";
import errors from "./errors.js";

const counterReducer = (count = 0, action) => {
  if (action.type === "INCREMENT_COUNTER") {
    return count + 1;
  }
  return count;
};

const reducers = combineReducers({
  count: counterReducer,
  activeTripDetails,
  errors,
});

export default reducers;
