import PostInfo from "../models/postInfo.js";
import mongoose from "mongoose";
/*
this is used to create handlers for our routes so we can call 
them in the routes / post.js instead of having all that code in one file,
helps keep code clean
*/

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostInfo.find()


    res.status(200).json(postMessage)

  } catch (error) {
    res.status(404).json({message: error.message})
    
  }
}

export const createPost = async (req, res) => {
  const post = req.body

  const newPost = new PostInfo(post)


  try {
    await newPost.save()

    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id'); //chech if an _id is real db mongoose id

  
  const updatedPost = await PostInfo.findByIdAndUpdate(_id, { ... post, _id }, { new: true }); //if id is valid update a post
  res.json(updatedPost);
}






export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`post with id: ${id} does not exist`);
  const post = await PostInfo.findById(id); // finds post by id 

  const updatedPost = await PostInfo.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true }); // gets id of liked and adds a like count 
  
  res.json(updatedPost);
}


export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`post with id: ${id} does not exist`);

  await PostInfo.findByIdAndRemove(id); ///////////////////////////

  res.json({ message:'Post has been deleted' });
}