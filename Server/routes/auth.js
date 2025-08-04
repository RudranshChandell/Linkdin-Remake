const express = require('express');
const router = express.Router();
const db = require('../db-simple');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route   POST /api/auth/register
// @desc    Register a new user
router.post('/register', async (req, res) => {
  const { name, email, password, bio } = req.body;
  
  try {
    // Check if user already exists
    const existingUser = await db.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await db.createUser({
      name,
      email,
      password: hashedPassword,
      bio: bio || ''
    });

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET || 'fallback_secret', {
      expiresIn: '1h',
    });

    res.status(201).json({ 
      token, 
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        bio: newUser.bio
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await db.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'fallback_secret', {
      expiresIn: '1h',
    });

    res.json({ 
      token, 
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        bio: user.bio
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;