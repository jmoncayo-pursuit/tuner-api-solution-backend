// controllers/songController.js
const express = require('express');
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require('../queries/song');
const { checkSongData } = require('../validations/checkSongs'); // Validation

songs.get('/', async (req, res) => {
  try {
    const allSongs = await getAllSongs(req.query); // Pass req.query
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(404).json({ error: 'No songs found.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const song = await getSong(id);
    if (song) {
      // Make sure you are sending a JSON response:
      res.status(200).json(song);
    } else {
      res.status(404).json({ error: 'Song Not Found' });
    }
  } catch (error) {
    // Handle errors from the database query:
    console.error('Error fetching song:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

songs.post('/', checkSongData, async (req, res) => {
  // Middleware added
  try {
    const newSong = await createSong(req.body);
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

songs.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json({ message: 'Song successfully deleted.' });
  } else {
    res.status(404).json({ error: 'Song Not Found.' });
  }
});

songs.put('/:id', checkSongData, async (req, res) => {
  // Middleware added
  const { id } = req.params;
  try {
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(404).json({ error: 'Song Not Found.' });
  }
});

module.exports = songs;