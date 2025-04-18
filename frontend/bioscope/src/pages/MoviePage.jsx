import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import axios from "axios";


const MovieList = () => {
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
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 h-screen w-full">
      <Navbar />
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
    </div>
  );
};

export default MovieList;
