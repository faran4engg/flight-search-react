import React from "react";

import FlightSearchContainer from "domains/FlightSearch/containers/FlightSearch";
import FlightSearchTabs from "domains/FlightSearch/components/FlightSearchTabs";

const SearchArea = () => (
  <FlightSearchContainer>
    {({ callGetFlights }) => (
      <div>
        <FlightSearchTabs callGetFlights={callGetFlights} />
      </div>
    )}
  </FlightSearchContainer>
);

export default SearchArea;
