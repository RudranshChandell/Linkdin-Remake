const express = require('express');
const router = express.Router();
const db = require('../db-simple');
const auth = require('../middleware/auth');

// @route   GET /api/posts
// @desc    Get all posts with user information
router.get('/', async (req, res) => {
  try {
    const posts = await db.getAllPosts();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/posts
// @desc    Create a new post (Protected route)
router.post('/', auth, async (req, res) => {
  const { content } = req.body;
  const userId = req.user.id;

  try {
    const newPost = await db.createPost({
      user_id: userId,
      content
    });
    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;