// /queries/song.js
const db = require('../db/dbConfig');

const getAllSongs = async (queryParams) => {
  // Add queryParams argument
  try {
    let baseQuery = 'SELECT * FROM songs';
    const whereClause = [];
    const orderByClause = [];

    if (queryParams.is_favorite !== undefined) {
      whereClause.push(
        `is_favorite = ${queryParams.is_favorite === 'true'}`
      );
    }

    if (queryParams.order) {
      orderByClause.push(`name ${queryParams.order.toUpperCase()}`);
    }

    let finalQuery = baseQuery;

    if (whereClause.length > 0) {
      finalQuery += ` WHERE ${whereClause.join(' AND ')}`;
    }

    if (orderByClause.length > 0) {
      finalQuery += ` ORDER BY ${orderByClause.join(', ')}`;
    }

    const allSongs = await db.any(finalQuery);
    return allSongs;
  } catch (error) {
    console.error('Error in getAllSongs:', error);
    throw error;
  }
};

const getSong = async (id) => {
  try {
    const oneSong = await db.one(
      'SELECT * FROM songs WHERE id=$1',
      id
    );
    // Ensure the song data is returned as an object:
    return oneSong;
  } catch (error) {
    // Log the error and return it for debugging:
    console.error('Error in getSong:', error);
    throw error; // Re-throw to propagate the error to the route handler
  }
};

const createSong = async (song) => {
  try {
    const newSong = await db.one(
      'INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [
        song.name,
        song.artist,
        song.album,
        song.time,
        song.is_favorite,
      ]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      'DELETE FROM songs WHERE id = $1 RETURNING *',
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

const updateSong = async (id, song) => {
  try {
    const columnsToUpdate = Object.keys(song);
    const values = columnsToUpdate.map((col) => song[col]);
    const setClause = columnsToUpdate
      .map((col, index) => `${col} = $${index + 1}`)
      .join(', ');

    const query = `UPDATE songs SET ${setClause} WHERE id = $${
      columnsToUpdate.length + 1
    } RETURNING *`;

    const updatedSong = await db.one(query, [...values, id]);
    return updatedSong;
  } catch (error) {
    console.error('Error in updateSong:', error);
    throw error;
  }
}; 

module.exports = {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
};
