import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

import FileBase from "react-file-base64";

import { TextField, Button, Typography, Paper } from "@material-ui/core";



const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  
  const [postData, setPostData] = useState({
    creator: '', 
    title: '', 
    message: '', 
    tags: '', 
    selectedFile: ''
  });
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch(); //returns a reference to the dispatch
  
  useEffect(() =>  {
    if(post) setPostData(post);
  }, [post])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId) {
      
      dispatch(updatePost(currentId, postData));
    } else {
      
      dispatch(createPost(postData));
    }
    clear();
  }
  const clear = () => {
   //  add clear functionality 
   setCurrentId(null);
   setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  }

     


  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{ currentId ? `Editing "${post.title}"` : 'Create a Dejaview' }</Typography>

        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(element) =>
            setPostData({ ...postData, creator: element.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(element) =>
            setPostData({ ...postData, title: element.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(element) =>
            setPostData({ ...postData, message: element.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(element) =>
            setPostData({ ...postData, tags: element.target.value.split(",") })
          }
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            // color="primary"
            size="larger"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
           className={classes.buttonClear} ///// 
            variant="contained"
            color="warning"
            size="medium"
            onClick={clear}
            halfWidth
          >
            Clear All
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Form;
