import React from "react";
import noFlightImg from "assets/svg/no-flights.svg";
import FlightResultCard from "domains/FlightResult/components/FlightResultCard/FlightResultCard";
const ResultArea = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img alt="no-flights" src={noFlightImg} width="100" height="100" />
      <h3>Oops, No Flights Found</h3>
      <FlightResultCard />
    </div>
  );
};

export default ResultArea;
