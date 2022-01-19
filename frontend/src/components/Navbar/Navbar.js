import React from "react";
import { Typography, AppBar, Button, Toolbar, Avatar } from '@material-ui/core';
import dejaview from "../../images/dejaview.png";
import useStyles from "./styles";
import { Link} from 'react-router-dom';




const Navbar = () => {

  const classes = useStyles();

  const user = null; // fake user

  return(
    <AppBar className={classes.appBar} position="static" color="inherit">
       <div className={classes.brandContainer}>
         
       <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">DejaView</Typography> {/* component={Link} to go to home page */}
       <img className={classes.image} src={dejaview} alt="dejaview" height="60" />
       
       </div>
       <Toolbar className={classes.toolbar}>
         {user ? (
           <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}> {user.result.name.charAt(0)} </Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary">Logout</Button> {/* need to write logout logic still  was getting error it can't be empty so didn't add onClick{} part*/}


           </div>

         ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button> //  redirect to auth page *



         )}

       </Toolbar>

       



    </AppBar>
  )
}









export default Navbar