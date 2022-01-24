// google start ::
// import React from "react";
import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
// end

import { Typography, AppBar, Button, Toolbar} from "@material-ui/core";
import Bunchofstuff from "../../images/Bunchofstuff.png";
import logo_black from "../../images/logo_black.png";
// import logo_trans from "../../images/logo_trans.png";
import useStyles from "./styles";
import decode from "jwt-decode";


// google task ::
// import { Link } from "react-router-dom";
  // google fix ::
// import { Link, useHistory, useLocation } from "react-router-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
// end

const Navbar = () => {
  const classes = useStyles();

  // google task ::
  // const user = null; // fake user
  const dispatch = useDispatch()
    // google fix ::
  // const history = useHistory();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  
  const logout = () => {
    dispatch({type: "LOGOUT"})

      // google fix ::
    // history.push("/")
    // navigate.push("/")
    navigate("/")

    setUser(null)
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token)

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  // end

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">

      <img
          className={classes.image}
          src={Bunchofstuff}
          alt="Bunchofstuff"
          height="60"
          
        />
      

      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
         <img
          className={classes.logo}
          src={logo_black}
          alt="logo_black"
          height="100"
          align="center"
        />
        </Typography>{" "}
        {/* component={Link} to go to home page */}
      
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Typography className={classes.userName} variant="h6">
              {`Logged in: ${user.result.name}`}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              
              // google task ::
              onClick={logout}
              // end
            >
              Logout
            </Button>{" "}
            {/* need to write logout logic still  was getting error it can't be empty so didn't add onClick{} part*/}
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            className={classes.login}
            // color="#f9d341"
          >
            Sign In
          </Button> //  redirect to auth page *
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;