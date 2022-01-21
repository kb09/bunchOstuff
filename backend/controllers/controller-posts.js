import PostInfo from "../models/postInfo.js";
import mongoose from "mongoose";
/*
this is used to create handlers for our routes so we can call 
them in the routes / post.js instead of having all that code in one file,
helps keep code clean
*/

export const getPosts = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await PostInfo.countDocuments({})

    const posts = await PostInfo.find().sort({_id: -1}).limit(LIMIT).skip(startIndex)

    res.status(200).json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const posts = await PostInfo.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostInfo({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id"); //chech if an _id is real db mongoose id

  const updatedPost = await PostInfo.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  ); //if id is valid update a post
  res.json(updatedPost);
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  } //check user's auth

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post with id: ${id} does not exist`);
  const post = await PostInfo.findById(id); // finds post by id

  const index = post.likes.findIndex((id) => id ===String(req.userId));

  if (index === -1) {
    post.likes.push(req.userId); //like the post
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId)); //dislike the post
  }
  const updatedPost = await PostInfo.findByIdAndUpdate(id, post, { new: true }); // gets id of liked and adds a like count

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post with id: ${id} does not exist`);

  await PostInfo.findByIdAndRemove(id); ///////

  res.json({ message: "Post has been deleted" });
};
