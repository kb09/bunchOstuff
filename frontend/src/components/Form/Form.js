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

        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(element) => setPostData({ ...postData, creator: element.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(element) => setPostData({ ...postData, title: element.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(element) => setPostData({ ...postData, message: element.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(element) => setPostData({ ...postData, tags: element.target.value.split(',') })} />
      </form>

    </Paper>
  );
}

export default Form;