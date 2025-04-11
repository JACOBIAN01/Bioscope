import React from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";



const MovieList = () => {
  const MovieData = [
    {
      id: 1,
      title: "From",
      poster: "https://pics.filmaffinity.com/from-265636059-large.jpg",
    },
    {
      id: 2,
      title: "From",
      poster: "https://pics.filmaffinity.com/from-265636059-large.jpg",
    },
  ];

  return (
    <div className="">
      <Navbar />
      <div className="flex gap-2">
        {MovieData.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster={movie.poster}
            />
          );
        })}
      </div>
      


    </div>
  );
};

export default MovieList;
