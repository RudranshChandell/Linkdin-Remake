const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows cross-origin requests from your Next.js app
app.use(express.json()); // Allows parsing JSON data in requests

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ...
app.use('/api/profile', require('./routes/profile'));
// ...