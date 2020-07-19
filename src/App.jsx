import React from "react";
import { Provider } from "react-redux";

import FlightApp from "pages/FlightApp/FlightApp";
import TopNavBar from "components/TopNavBar/TopNavBar";

import configureStore from "./store/store";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <TopNavBar />
    <FlightApp />
  </Provider>
);

export default App;
