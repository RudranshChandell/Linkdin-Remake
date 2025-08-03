const express = require('express');
const router = express.Router();
const pool = require('../db');

// @route   GET /api/profile/:userId
// @desc    Get a user's profile and posts by their ID
router.get('/:userId', async (req, res) => {
  try {
    const userResult = await pool.query('SELECT id, name, email, bio FROM users WHERE id = $1', [req.params.userId]);
    if (userResult.rows.length === 0) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const postsResult = await pool.query(
      'SELECT * FROM posts WHERE user_id = $1 ORDER BY created_at DESC',
      [req.params.userId]
    );

    res.json({
      user: userResult.rows[0],
      posts: postsResult.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;