import React from "react";
import Container from "@material-ui/core/Container";
import ResultArea from "./containers/ResultArea/ResultArea";
import SearchArea from "./containers/SearchArea/SearchArea";
import "./App.css";

function App() {
  return (
    <Container>
      <div className="App">
        <SearchArea />
        <ResultArea />
      </div>
    </Container>
  );
}

export default App;
