import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { Form, Field } from "react-final-form";

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

const FlightSearchForm = ({ isRoundTrip, callGetFlights }) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onSubmit = (values) => {
    console.log(selectedDate);
    console.log("onSubmit...", values);
    callGetFlights();
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
                <Field name="somedate">
                  {({ input, meta }) => (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid item xs={12} sm={12}>
                        <KeyboardDatePicker
                          {...input}
                          name="somedate"
                          size="small"
                          fullWidth
                          id="somedate"
                          autoOk
                          variant="inline"
                          inputVariant="outlined"
                          label="With keyboard"
                          format="MM/dd/yyyy"
                          value={selectedDate}
                          InputAdornmentProps={{ position: "end" }}
                          onChange={(date) => {
                            const dateISO = date.toISOString();
                            input.onChange(dateISO);
                            handleDateChange(dateISO);
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>
                  )}
                </Field>
              )}
            </Grid>
            <div className={classes.submitBtn}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<SearchIcon />}
                type="submit"
                disabled={invalid}
                className={classes.button}
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
