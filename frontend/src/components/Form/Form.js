import React from 'react';
import {
  TextField, 
  Button,
  Typography,
  Paper
} from '@material-ui/core';



const Form = () => {
  return (

    <Paper className = {classes.paper}>

      <form autoComplete='off' noValidate className={classes.form}>
        <Typography variant='h6'> Create A DejaView to share  </Typography>
        <TextField name="creator" label="Creator" fullWidth variant="outlined">          
        </TextField>

      </form>

    </Paper>
  );
}

export default Form;