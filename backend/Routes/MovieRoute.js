import express from "express";
import Movie from "../models/Movies.js";

const router = express.Router();

//Get All Movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

export default router;
