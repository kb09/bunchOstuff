import React from "react";
import { Typography, AppBar } from '@material-ui/core';
import dejaview from "../../images/dejaview.png";
import useStyles from "./styles";




const Navbar = () => {

  const classes = useStyles();

  return(
    <AppBar className={classes.appBar} position="static" color="inherit">
       <Typography className={classes.heading} variant="h2" align="center">DejaView</Typography>
       <img className={classes.image} src={dejaview} alt="dejaview" height="60" />
    </AppBar>
  )
}









export default Navbar