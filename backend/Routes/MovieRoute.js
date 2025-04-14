const express = require("express");
const Movie = require("../models/Movies.js");

const router = express.Router();

//Get All Movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    if (movies.length === 0) {
      return res.status(404).json({ message: "No movies found!" });
    }
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

//Post Movies to DB
router.post("/", async (req, res) => {
  try {
    const { title, poster, PlayBackId } = req.body;
    if (!title || !poster || !PlayBackId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMovie = new Movie({
      title,
      poster,
      PlayBackId,
    });

    await newMovie.save();
    res
      .status(201)
      .json({ message: "Movie added successfully", movie: newMovie });
  } catch (error) {
    console.error("Error saving movie:", error);
    res.status(500).json({ error: "Failed to save movie" });
  }
});

module.exports = router;

// {
//   "poster": "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
//   "title": "Oppenheimer",
//   "PlayBackId": "https://vz-6a253e19-5e3.b-cdn.net/1973734f-51f1-4496-b146-45f4c72b69cd/playlist.m3u8"
// }

