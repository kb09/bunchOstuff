import express from "express";

import { getPosts, createPost, updatePost, likePost, deletePost } from "../controllers/controller-posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

// http://localhost:4000/posts
router.get("/", getPosts); // getPosts is from contorller-posts.js kind of like helper function 
router.post("/", auth, createPost);
router.patch('/:id', auth, updatePost); //update post with id
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost); // route to update when like is clicked

export default router;
