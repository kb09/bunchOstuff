import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";

import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { likePost } from "../../../actions/posts";
import { deletePost } from "../../../actions/posts";
import { TwitterShareButton, EmailShareButton } from "react-share";
import {
  // FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from "react-share";


import { FaRecycle, FaRegEdit } from 'react-icons/fa';


















const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch(); //returns a reference to the dispatch










  // const Likes = () => {
  //   if (post.likes.length > 0) {
  //     return post.likes.find(
  //       (like) => like === (
  //         // user?.result?.googleId || 
  //         user?.result?._id)
  //     ) ? ( //******googleID */ ------  // if likes array has id of current user
  //       <>
  //         <ThumbUpAltIcon fontSize="small" />
  //         &nbsp;
  //         {post.likes.length > 2
  //           ? `You and ${post.likes.length - 1} others`
  //           : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
  //       </>
  //     ) : (
  //       <>
  //         <ThumbUpAltOutlined fontSize="small" />
  //         &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
  //       </>
  //     );
  //   }
  //     return (
  //       <>
  //         <ThumbUpAltOutlined fontSize="small" />
  //         &nbsp;Like
  //       </>
  //     ); // first to like
  //   };











    const Recycle = () => {
      if (post.likes.length > 0) {
        return post.likes.find(
          (like) => like === (
            // user?.result?.googleId || 
            user?.result?._id)
        ) ? ( //******googleID */ ------  // if likes array has id of current user
          <>
            <FaRecycle 
            size="2.5em" 
            color="green"
            // style={{border: '3px solid'}}
            // style={{strokeWidth: "20"}}
            />
            &nbsp;
            {post.likes.length > 2
              ? `You and ${post.likes.length - 1} others`
              : `${post.likes.length} ${post.likes.length > 1 ? "" : ""}`}
          </>
        ) : (
          <>
            <FaRecycle 
            size="2.5em" 
            color="green" 
            // style={{border: '3px solid'}}
            // style={{strokeWidth: "20"}}
            />
            &nbsp;{post.likes.length} {post.likes.length === 1 ? "" : ""}
          </>
        );
      }

    return (
      <>
        <FaRecycle 
        size="2.5em" 
        color="green" 
        // style={{border: '3px solid'}}
        // style={{strokeWidth: "20"}}
        />
        &nbsp;
      </>
    ); // first to like
  };









  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />

      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      {(user?.result?.googleId === post?.creator ||
        user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <FaRegEdit 
            className={classes.editButton}
            size="2em"
            />
            {/* EDIT */}
          </Button>
        </div>
      )}

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      <Typography className={classes.title} variant="h5" gutterBottom>
        {" "}
        {post.title}{" "}
      </Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {" "}
          {post.message}{" "}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          hidden={!user?.result}
        >
          {" "}
          {post.email}{" "}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          hidden={!user?.result}
        >
          {" "}
          {post.phone}{" "}
        </Typography>
      </CardContent>



















      {/* LIKE */}
      <CardActions className={classes.cardActions}>
        <Button
          // size="small"
          // color="primary"
          style={{color: "green"}}
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          
          <Recycle 
          // onClick={Likes}
          />
          {/* <Likes /> */}
        </Button>

        











        
        {/*
          <FacebookShareButton
       url={`${post.name}  is offering: ${post.title},  ${post.message} ! Search for it on  ${siteUrl}`   }
      //  hashtags={post.tags}
      //  description={post.description}
       
     >
      <FacebookIcon size={32} round={true} />
     </FacebookShareButton> */}
        {/* <FacebookShareButton
        url={`http://google.com`}
        

        quote= {post.tags}
        hashtag={post.tags}
        description={post.description}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton> */}
        {/* <EmailShareButton 
      subject="test"

      body={`{$post.message}`}
      >
        <EmailIcon size={32} round/>

      </EmailShareButton> */}
        <EmailShareButton
          // url={}
          url={``}
          subject={`${post.name} is offering: ${post.title}`}
          body={`${post.message}`}
          disabled={!user?.result}
        >
          <EmailIcon size={"2rem"} round />
        </EmailShareButton>
        <TwitterShareButton
          //  title={"test"}
          url={`${post.name} is offering: ${post.title}, ${post.message}! Search for it on bunchOstuff.com  `}
          hashtags={post.tags}
          disabled={!user?.result}
          //  description={post.description}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        {// user?.result?.googleId === post?.creator ||
        user?.result?._id === post?.creator && (
          <Button
            className={classes.delete}
            size="medium"
            // color="#694E4E"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon 
            fontSize="large" />
            {/* DELETE */}
          </Button>
        )}
        {/* Checking if user is creator of post */}{" "}
        {/* //////////////// googleID */}
      </CardActions>
    </Card>
  );
};

export default Post;
