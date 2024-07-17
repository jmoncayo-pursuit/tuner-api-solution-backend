// app.js
// Dependencies
const express = require('express');
const cors = require('cors');
const songsController = require('./controllers/songsController');

// Configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/songs', songsController);

// Routes
// localhost:3346/
app.get('/', (req, res) => {
  res.send('Welcome to Tunner App!');
});

// Temporary: Disable favicon requests
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Catch-all route for handling requests to non-existent routes
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Export
module.exports = app;