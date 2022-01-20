import express from "express";

import { getPostsBySearch, getPosts, createPost, updatePost, likePost, deletePost } from "../controllers/controller-posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

// http://localhost:4000/posts
router.get("/search", getPostsBySearch);
router.get("/", getPosts); // getPosts is from contorller-posts.js kind of like helper function 
router.post("/", auth, createPost);
router.patch('/:id', auth, updatePost); //update post with id
router.patch('/:id/likePost', auth, likePost); // route to update when like is clicked
router.delete('/:id', auth, deletePost);

export default router;
