import React from "react";

import FlightResultCard from "./FlightResultCard";

const ResultWrapper = ({ data }) => (
  <div>{data.length && data.map(() => <FlightResultCard />)}</div>
);

export default ResultWrapper;
