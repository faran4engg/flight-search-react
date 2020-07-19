import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  flexGrow: {
    flexGrow: 1,
  },
}));

const TopNavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.flexGrow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <h3 className={classes.flexGrow}>Flight Search Engine</h3>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavBar;
