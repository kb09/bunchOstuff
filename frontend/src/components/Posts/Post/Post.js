import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch} from 'react-redux';

import useStyles from './styles';
import {likePost} from '../../../actions/posts';
import {deletePost} from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch(); //returns a reference to the dispatch
  
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
      <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> &nbsp; Like  {post.likeCount} </Button>
      <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
}

export default Post;