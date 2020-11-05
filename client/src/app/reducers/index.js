import { combineReducers } from "redux";
import activeTripDetails from "./activeTripDetails";
import errors from "./errors";
import packingList from "./packingList";
import user from "./user";
import trips from "./trips";

const reducers = combineReducers({
  activeTripDetails,
  errors,
  packingList,
  user,
  trips,
});

export default reducers;
