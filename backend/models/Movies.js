const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  poster: String,
  PlayBackId: String,
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;