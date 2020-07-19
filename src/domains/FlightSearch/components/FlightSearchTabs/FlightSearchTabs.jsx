import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Form from "components/Form/Form";

export default function IconLabelTabs() {
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
        <Form isRoundTrip={value === 1} />
      </Paper>
    </>
  );
}
/*

      */
