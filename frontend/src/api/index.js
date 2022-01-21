import axios from "axios";

const API = axios.create({baseURL: "http://localhost:4000"})

// send token back to the back end to verify
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});




export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);//what post we want to update
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const createPost = (newPost) => API.post("/posts", newPost); // sends newPost as a data

export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);








