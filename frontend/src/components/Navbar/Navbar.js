// google start ::
// import React from "react";
import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
// end

import { Typography, AppBar, Button, Toolbar, Avatar } from "@material-ui/core";
import Garagejiji from "../../images/Garagejiji.png";
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

      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  // end

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
         Garagejiji
        </Typography>{" "}
        {/* component={Link} to go to home page */}
        <img
          className={classes.image}
          src={Garagejiji}
          alt="Garagejiji"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            {/* <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {" "}
              {user.result.name.charAt(0)}{" "}
            </Avatar> ////////////// */}
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
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
            color="primary"
          >
            Sign In
          </Button> //  redirect to auth page *
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;