import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import SearchIcon from "@material-ui/icons/Search";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { validate, flightSearchFormSchema } from "./validation";

const useStyles = makeStyles(() => ({
  pad: {
    padding: "1rem",
  },
  submitBtn: {
    marginTop: "1em",
    textAlign: "right",
  },
}));

const FlightSearchForm = ({ isRoundTrip }) => {
  const classes = useStyles();

  const onSubmit = (values) => {
    console.log("onSubmit...", values);
  };

  return (
    <Container className={classes.pad}>
      <Form
        onSubmit={onSubmit}
        validate={validate(flightSearchFormSchema)}
        render={({ handleSubmit, form, invalid }) => (
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Field name="departure">
                {({ input, meta }) => (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...input}
                      name="departure"
                      size="small"
                      fullWidth
                      id="departure"
                      label="Departure City"
                      variant="outlined"
                      error={meta.error && meta.touched}
                    />
                  </Grid>
                )}
              </Field>
              <Field name="arrival">
                {({ input, meta }) => (
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...input}
                      name="arrival"
                      size="small"
                      fullWidth
                      id="arrival"
                      label="Arrival City"
                      variant="outlined"
                      error={meta.error && meta.touched}
                    />
                  </Grid>
                )}
              </Field>

              {isRoundTrip && (
                <Field name="datelol">
                  {({ input, meta }) => (
                    <Grid item xs={12} sm={12}>
                      <TextField
                        {...input}
                        name="datelol"
                        size="small"
                        fullWidth
                        id="datelol"
                        label="Show only when its Round Trip"
                        variant="outlined"
                        error={meta.error && meta.touched}
                      />
                    </Grid>
                  )}
                </Field>
              )}
            </Grid>
            <div className={classes.submitBtn}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
                disabled={invalid}
              >
                Search
              </Button>
            </div>
          </form>
        )}
      />
    </Container>
  );
};

export default FlightSearchForm;
