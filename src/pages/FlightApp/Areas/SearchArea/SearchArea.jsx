import React from "react";

import FlightSearchContainer from "domains/FlightSearch/containers/FlightSearch";
import FlightSearchTabs from "domains/FlightSearch/components/FlightSearchTabs/FlightSearchTabs";

const SearchArea = () => (
  <FlightSearchContainer>
    {({ callGetFlights }) => (
      <FlightSearchTabs callGetFlights={callGetFlights} />
    )}
  </FlightSearchContainer>
);

export default SearchArea;
