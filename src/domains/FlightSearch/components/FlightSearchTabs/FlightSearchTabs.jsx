import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FlightSearchForm from "../FlightSearchForm/FlightSearchForm";

const FlightSearchTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper color="secondary" square={false} elevation={3}>
        <Tabs centered value={value} onChange={handleChange}>
          <Tab label="One Way" />
          <Tab label="Round Trip" />
        </Tabs>
        <FlightSearchForm isRoundTrip={value === 1} />
      </Paper>
    </>
  );
};
export default FlightSearchTabs;
