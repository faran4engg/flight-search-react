import React from "react";

import FlightSearchContainer from "domains/FlightSearch/containers/FlightSearch";
import FlightSearchTabs from "domains/FlightSearch/components/FlightSearchTabs/FlightSearchTabs";

const SearchArea = () => (
  <FlightSearchContainer>{() => <FlightSearchTabs />}</FlightSearchContainer>
);

export default SearchArea;
