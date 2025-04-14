import React from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import axios from "axios";


const MovieList = () => {
 

  


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
              PlayBackId={movie.PlayBackId}
            />
          );
        })}
      </div>
      

    </div>
  );
};

export default MovieList;
