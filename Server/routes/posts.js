const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/auth'); // Import the middleware

// ... (Your existing GET route remains the same) ...

// @route   POST /api/posts
// @desc    Create a new post (Protected route)
router.post('/', auth, async (req, res) => { // Add 'auth' middleware here
  const { content } = req.body;
  const userId = req.user.id; // Get the user ID from the authenticated token

  try {
    const newPost = await pool.query(
      'INSERT INTO posts (user_id, content) VALUES ($1, $2) RETURNING *',
      [userId, content]
    );
    res.status(201).json(newPost.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;