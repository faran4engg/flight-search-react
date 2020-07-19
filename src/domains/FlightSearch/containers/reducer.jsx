import { GET_FLIGHTS_SUCCESS } from "./constants";

const INIT_STATE = {
  data: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_FLIGHTS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};
