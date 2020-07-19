import React from "react";

import FlightResultContainer from "domains/FlightResult/containers/FlightResult";
import ResultWrapper from "domains/FlightResult/components/ResultWrapper";
import NoResult from "domains/FlightResult/components/NoResult";

const ResultArea = () => (
  <FlightResultContainer>
    {({ data }) => (
      <>{data.length > 0 ? <ResultWrapper data={data} /> : <NoResult />}</>
    )}
  </FlightResultContainer>
);

export default ResultArea;
