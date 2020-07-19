import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import FlightSearchForm from "./FlightSearchForm";

const FlightSearchTabs = ({ callGetFlights }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper square={false} elevation={3}>
        <Tabs
          centered
          value={value}
          indicatorColor="primary"
          textColor="inherit"
          onChange={handleChange}
        >
          <Tab label="One Way" />
          <Tab label="Round Trip" />
        </Tabs>
        <FlightSearchForm
          isRoundTrip={value === 1}
          callGetFlights={callGetFlights}
        />
      </Paper>
    </>
  );
};
export default FlightSearchTabs;
