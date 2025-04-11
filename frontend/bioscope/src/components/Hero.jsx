import React from "react";
import { useNavigate } from "react-router-dom";


const Hero = () => {

  const navigate  = useNavigate();

  const WatchMovie = ()=>{navigate('/watchmovie')}


  return (
    <section className="relative h-screen w-full overflow-hidden text-white bg-gradient-to-t from-gray-700 via-gray-800 to-black ">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={BG}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      /> 
       */}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">Bioscope</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Dive into a world of stories. Stream the latest movies and series now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={WatchMovie}
            className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-300 transition"
          >
            Start Watching
          </button>
          <button
            onClick={WatchMovie}
            className="bg-transparent border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Browse Library
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
