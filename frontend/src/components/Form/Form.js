import React, {useState} from 'react';
import useStyles from './styles';




import {
  TextField, 
  Button,
  Typography,
  Paper
} from '@material-ui/core';
import { useState } from 'react';



const Form = () => {
  const classes = useStyles();

  const [postData, setPostData] = useState({
    creator: '', 
    title: '', 
    message: '', 
    tags: '', 
    selectedFile: ''


  });
  return (
    

    <Paper className = {classes.paper}>

      <form autoComplete='off' noValidate className={classes.form}>
        <Typography variant='h6'> Create A DejaView to share  </Typography>
        <TextField name="creator" 
        label="Creator" 
        fullWidth 
        variant="outlined"
        value={postData.creator}
        
        >          
        </TextField>

      </form>

    </Paper>
  );
}

export default Form;