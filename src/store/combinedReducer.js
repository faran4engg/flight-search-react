import { combineReducers } from "redux";
import FlightReducer from "domains/FlightSearch/containers/reducer";
export default () =>
  combineReducers({
    flight: FlightReducer,
  });
