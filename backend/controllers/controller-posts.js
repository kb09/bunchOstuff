/*
this is used to create handlers for our routes so we can call 
them in the routes / post.js instead of having all that code in one file,
helps keep code clean
*/

export const getPosts = (req, res) => {
  res.send("THIS WORKS!")
}
