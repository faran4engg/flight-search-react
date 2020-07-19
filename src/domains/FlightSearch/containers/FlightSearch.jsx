import React from "react";
import { connect } from "react-redux";

import { getFlights } from "./actions";

const FlightSearch = ({ getFlights, children }) => {
  const callGetFlights = () => getFlights();
  return children({ callGetFlights });
};

export default connect(null, {
  getFlights,
})(FlightSearch);
