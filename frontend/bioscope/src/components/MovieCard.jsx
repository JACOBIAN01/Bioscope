import React from "react";
// import { useState} from "react";
import { useNavigate } from "react-router-dom";


const MovieCard = ({PlayBackId,title,poster})=>{

const navigate = useNavigate();

const handleWatchNow= ()=>{
  navigate(`/watch/${PlayBackId}`);
}


    return (
      <div>
        <div className="max-w-sm mx-auto bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-200">
          <img
            className="w-full h-50 object-cover"
            src={poster}
            alt="Movie Poster"
          />
          <div className="p-4">
            <h2 className="text-3xl text-center font-semibold text-white">{title}</h2>
            <button
              onClick={handleWatchNow}
              className="mt-4 px-4 py-2 bg-yellow-600 text-black font-bold
             rounded-lg hover:bg-yellow-700 transition"
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    );
}

export default MovieCard;