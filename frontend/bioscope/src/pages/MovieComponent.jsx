import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";


const MovieComponent = () => {
  const [movies, setMovies] = useState([]);

  const backendURL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000/api/movies"
      : "https://bioscope-backend.onrender.com/api/movies";

  useEffect(() => {
    axios
      .get(backendURL)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [backendURL]);

  return (
    <div className="flex gap-2">
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie._id}
            title={movie.title}
            poster={movie.poster}
            PlayBackId={movie.PlayBackId}
            genre={movie.genre}
          />
        );
      })}
    </div>
  );
};

export default MovieComponent;