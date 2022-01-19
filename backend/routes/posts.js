import express from "express";

import { getPosts, createPost, updatePost, likePost, deletePost } from "../controllers/controller-posts.js";

const router = express.Router();
import auth from "../middleware/auth.js";

// http://localhost:4000/posts
router.get("/", getPosts); // getPosts is from contorller-posts.js kind of like helper function 
router.post("/", auth, createPost);
router.patch('/:id', auth, updatePost); //update post with id
router.patch('/:id/likePost', auth, likePost); // route to update when like is clicked
router.delete('/:id', auth, deletePost);

export default router;
