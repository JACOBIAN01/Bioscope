import React from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";



const MovieList = () => {
  const MovieData = [
    {
      id: 1,
      title: "From",
      poster:
        "https://miro.medium.com/v2/resize:fit:1400/1*39M4XbHXCTfBenNNqLLyLA@2x.jpeg",
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
