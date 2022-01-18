import express from "express";

import { getPosts, createPost, updatePost, likePost } from "../controllers/controller-posts.js";

const router = express.Router();

// http://localhost:4000/posts
router.get("/", getPosts); // getPosts is from contorller-posts.js kind of like helper function 
router.post("/", createPost);
router.patch('/:id', updatePost); //update post with id
router.patch('/:id/likePost', likePost); // route to update when like is clicked

export default router;
