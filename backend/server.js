// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const config = require('./config/config');
const User = require('./models/User');
const Exercise = require('./models/Exercise');

const app = express();
const port = 3000;

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Initialize Sequelize with database config
const sequelize = new Sequelize(config.development);

// Define models
const models = {
  User: User(sequelize, DataTypes),
  Exercise: Exercise(sequelize, DataTypes),
};

// Define model associations if needed
// Example: User.hasMany(Exercise);

// Sync models with database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

// Example API routes
// Register a new user
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Validate the input
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Username, email, and password are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.error('hashedPassword:', hashedPassword);
    const newUser = await models.User.create({
      username,
      email,
      password_hash: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: error.errors[0]?.message ?? 'Internal Server Error' });
  }
});

// Login endpoint (example)
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await models.User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    // Handle successful login
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: error.errors[0]?.message ?? 'Internal Server Error' });
  }
});

// Fetch all body parts
// app.get('/api/bodyparts', async (req, res) => {
//   try {
//     // Replace with your logic to fetch body parts from database
//     const bodyParts = ['back', 'chest', 'legs', 'arms', 'shoulders', 'core'];
//     res.json(bodyParts);
//   } catch (error) {
//     console.error('Error fetching body parts:', error);
//     res.status(500).json({ message: error.errors[0]?.message ?? 'Internal Server Error' });
//   }
// });

// Fetch exercises for a specific body part
// app.get('/api/exercises/:bodyPart', async (req, res) => {
//   const { bodyPart } = req.params;
//   try {
//     // Replace with your logic to fetch exercises from database based on body part
//     const exercises = await models.Exercise.findAll({ where: { bodyPart } });
//     res.json(exercises);
//   } catch (error) {
//     console.error(`Error fetching exercises for ${bodyPart}:`, error);
//     res.status(500).json({ message: error.errors[0]?.message ?? 'Internal Server Error' });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
