import express from "express";

const router = express.Router();

// http://localhost:4000/posts
router.get("/", (req, res) => {
  res.send("THIS WORKS!")
});

export default router;