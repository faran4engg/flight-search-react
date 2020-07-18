import React from "react";
import { Form, Field } from "react-final-form";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FlightSearchTabs from "../../../../components/FlightSearchTabs/FlightSearchTabs";

const SearchArea = () => {
  const onSubmit = (values) => {
    console.log("onSubmit...", values);
  };
  return <FlightSearchTabs />;
};

export default SearchArea;

/*

 <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, invalid }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Field name={"das"} key={"das"}>
            {({ input, meta }) => (
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
            )}
          </Field>

          <div className="buttons">
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </div>
        </form>
      )}
    />
*/
