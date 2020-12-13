// routing system for /post endpoint
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// ------- handling GET request at /post ---------
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

// ------- handling POST request at /post ----------
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

// ------- handling DELETE request at /post/:postID ----------
router.delete("/:postID", async (req, res) => {
  try {
    const deletedPost = await Post.remove({ _id: req.params.postID });
    res.json(deletedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
