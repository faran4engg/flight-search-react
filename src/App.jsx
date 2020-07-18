import React from "react";
import "./App.css";
import ResultArea from "./containers/ResultArea/ResultArea";
import SearchArea from "./containers/SearchArea/SearchArea";

function App() {
  return (
    <div className="App">
      <SearchArea />
      <ResultArea />
    </div>
  );
}

export default App;
