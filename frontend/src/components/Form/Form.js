import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

import FileBase from "react-file-base64";

import { TextField, Button, Typography, Paper } from "@material-ui/core";


const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  
  const [postData, setPostData] = useState({
    title: '', 
    message: '', 
    tags: '', 
    selectedFile: ''
  });
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch(); //returns a reference to the dispatch
  const user = JSON.parse(localStorage.getItem('profile'));
  
  useEffect(() =>  {
    if(post) setPostData(post);
  }, [post]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId === 0) {
      
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };
  const clear = () => {
   //  add clear functionality 
   setCurrentId(null);
   setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Sign In to create your own ads and like other's ads.
        </Typography>
      </Paper>
    );
  }
     


  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{ currentId ? `Editing "${post.title}"` : 'Post Your Ad' }</Typography>
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
           className={classes.buttonClear} ///// 
            variant="contained"
            color="warning"
            size="medium"
            onClick={clear}
            halfWidth
          >
            Clear All
          </Button>


          <Button
            className={classes.buttonSubmit}
            variant="contained"
            // color="primary"
            size="larger"
            type="submit"
            halfWidth
          >
            Submit
          </Button>
        
        </div>
      </form>
    </Paper>
  );
};

export default Form;
