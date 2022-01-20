import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch} from 'react-redux';

import useStyles from './styles';
import {likePost} from '../../../actions/posts';
import {deletePost} from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch(); //returns a reference to the dispatch


  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id)) //******googleID */ ------  // if likes array has id of current user 
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>; // first to like
  };
  
  return (
    <Card className={classes.card}>
    <CardMedia className={classes.media} image={post.selectedFile} title = {post.title} />
      
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>

      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}> 
          EDIT
        </Button> 
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>


      <Typography className={classes.title} variant="h5" gutterBottom> {post.title} </Typography>
      
      
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p"> {post.message} </Typography>
      </CardContent>



      <CardActions className={classes.cardActions}> 
      <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
        <Likes/>
      </Button>

      <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
}

export default Post;