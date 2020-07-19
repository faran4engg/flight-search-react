import React from "react";

import FlightResultContainer from "domains/FlightResult/containers/FlightResult";
import FlightResultCard from "domains/FlightResult/components/FlightResultCard/FlightResultCard";
import NoResult from "domains/FlightResult/components/NoResult/NoResult";

const ResultArea = () => (
  <FlightResultContainer>
    {({ data }) => <>{data.length > 0 ? <FlightResultCard /> : <NoResult />}</>}
  </FlightResultContainer>
);

export default ResultArea;
