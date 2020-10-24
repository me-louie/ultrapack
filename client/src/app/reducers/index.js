import { combineReducers } from "redux";
import activeTripDetails from "./activeTripDetails";
import errors from "./errors.js";
import packingList from "./packingList";


const reducers = combineReducers({
  activeTripDetails,
  errors,
  packingList
});

export default reducers;
