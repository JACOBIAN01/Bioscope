import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import axios from "axios";


const MovieList = () => {
 
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/movies").then((response)=>{
      setMovies(response.data);
    }).catch((err)=>{
      console.log(err);
    })
    
  })

  return (
    <div className="">
      <Navbar />
      <div className="flex gap-2">
        {movies.map((movie) => {
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
