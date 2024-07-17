const checkSongData = (req, res, next) => {
  // For POST (create), require both name and artist
  if (req.method === 'POST' && (!req.body.name || !req.body.artist)) {
    return res
      .status(400)
      .json({ error: 'Song name and artist are required' });
  }

  // For PUT (update), at least one field should be present
  if (req.method === 'PUT' && Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ error: 'At least one field to update is required' });
  }

  next(); // Continue to the next middleware/route handler
};

module.exports = { checkSongData };