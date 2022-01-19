import axios from "axios";

const API = axios.create({baseURL: "http://localhost:4000"})

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost); // sends newPost as a data

export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);//what post we want to update
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
