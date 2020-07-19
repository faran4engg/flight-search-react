import { all } from "redux-saga/effects";
import flightSaga from "domains/FlightSearch/containers/sagas";

export default function* rootSaga(getState) {
  yield all([flightSaga()]);
}
