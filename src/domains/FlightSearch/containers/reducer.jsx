import { GET_FLIGHTS } from "./constants";

const INIT_STATE = {
  success: false,
  message: null,
  parameters: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_FLIGHTS: {
      return {
        ...state,
        success: true,
      };
    }

    default:
      return state;
  }
};
