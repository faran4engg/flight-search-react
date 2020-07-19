import React from "react";
import Container from "@material-ui/core/Container";
import { ResultArea, SearchArea } from "./Areas";
import "./FlightApp.css";
const FlightApp = () => (
  <Container>
    <div className="flight-app">
      <SearchArea className="search-area" />
      <ResultArea className="result-area" />
    </div>
  </Container>
);

export default FlightApp;
