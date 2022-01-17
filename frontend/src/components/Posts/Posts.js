import React from 'react';
import {Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts);

  // return (
    
  // );
};

export default Posts;