import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  pad: {
    padding: "1rem",
  },
}));

export default function Form({ isRoundTrip }) {
  const classes = useStyles();

  return (
    <Container className={classes.pad}>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              fullWidth
              id="departure"
              label="Departure City"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              size="small"
              fullWidth
              id="arrival"
              label="Arrival City"
              variant="outlined"
            />
          </Grid>
          {isRoundTrip && (
            <Grid item xs={12} sm={12}>
              <TextField
                size="small"
                fullWidth
                id="departure"
                label="Show only when its Round Trip"
                variant="outlined"
              />
            </Grid>
          )}
        </Grid>
      </form>
    </Container>
  );
}
