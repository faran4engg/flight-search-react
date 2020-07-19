import React from "react";
import { connect } from "react-redux";

const FlightResult = ({ data, children }) => {
  return children({ data });
};
const mapStateToProps = ({ flights }) => ({ data: flights.data });
export default connect(mapStateToProps, {})(FlightResult);
