import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import airplane1 from "assets/svg/airplane4.svg";
import airplane2 from "assets/svg/globe.svg";
import airplane3 from "assets/svg/cargo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1em",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 140,
    transform: "scale(0.7)",
  },
}));

const FlightResultCard = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <h3>Flight Result LoL</h3>
            <h4>Need to show more data</h4>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={airplane1}
          title="Live from space album cover"
        />
      </Card>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <h3>Flight Result LoL</h3>
            <h4>Need to show more data</h4>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={airplane2}
          title="Live from space album cover"
        />
      </Card>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <h3>Flight Result LoL</h3>
            <h4>Need to show more data</h4>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={airplane3}
          title="Live from space album cover"
        />
      </Card>
    </>
  );
};
export default FlightResultCard;
