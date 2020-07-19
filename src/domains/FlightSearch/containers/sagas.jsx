import { all, call, put, fork, takeLatest } from "redux-saga/effects";
import axios from "../../../axios";
import { GET_FLIGHTS } from "./constants";
import { getFlightsSuccess } from "./actions";

const getFlightRequest = async (payload) =>
  await axios
    .get("/getFlights", payload)
    .then((flights) => flights)
    .catch((error) => error);

function* getAllFlights({ payload }) {
  try {
    const allFlights = yield call(getFlightRequest, {
      ...payload,
    });
    const { data, status } = allFlights;

    if (status === 200) {
      yield put(getFlightsSuccess(data));
    }
  } catch (error) {
    console.log({ addCropCatch: error });
  }
}

export function* getFlights() {
  yield takeLatest(GET_FLIGHTS, getAllFlights);
}

export default function* rootSaga() {
  yield all([fork(getFlights)]);
}
