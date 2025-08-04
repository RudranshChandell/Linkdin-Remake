const express = require('express');
const router = express.Router();
const db = require('../db-simple');

// @route   GET /api/profile/:userId
// @desc    Get a user's profile and posts by their ID
router.get('/:userId', async (req, res) => {
  try {
    const user = await db.findUserById(req.params.userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const posts = await db.getPostsByUserId(req.params.userId);

    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        bio: user.bio
      },
      posts: posts
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;