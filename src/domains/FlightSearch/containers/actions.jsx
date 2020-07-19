import { GET_FLIGHTS, GET_FLIGHTS_SUCCESS } from "./constants";

export const getFlights = () => {
  return {
    type: GET_FLIGHTS,
  };
};

export const getFlightsSuccess = (flights) => {
  return {
    type: GET_FLIGHTS_SUCCESS,
    payload: flights,
  };
};
