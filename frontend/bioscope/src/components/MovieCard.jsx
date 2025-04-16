import React from "react";
import { useNavigate } from "react-router-dom";


const MovieCard = ({ title, poster, genre, PlayBackId}) => {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    const encodedUrl = encodeURIComponent(PlayBackId);
    navigate(`/watch/${encodedUrl}`);
  };


  return (
    <div>
      <div className="max-w-sm mx-auto p-4">
        <div className="relative bg-gray-900 rounded-3xl border border-gray-700 shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 group">
          <img
            src={poster}
            alt="Movie Poster"
            className="w-full h-64 object-cover transition duration-300 group-hover:opacity-90"
          />

          {/* Play icon overlay on hover */}
          <div className="absolute top-0 left-0 w-full h-64 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
            <div className="bg-black/60 p-4 rounded-full">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Info Section */}
          <div className="p-6 text-center">
            <h2 className="text-white text-2xl font-bold mb-1 tracking-wide">
              {title}
            </h2>

            {/* Genre */}
            <div className="text-gray-400  mb-4 italic font-semibold px-3 py-1 rounded-full shadow-sm">
              {genre.join("ㆍ")}
            </div>

            <button
              className="inline-block px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
              onClick={handleWatchNow}
            >
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;