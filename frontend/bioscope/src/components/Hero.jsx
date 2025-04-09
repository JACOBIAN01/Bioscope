import React from "react";
import Bg_Video from "../assets/HeroBG_Video.mp4";
import poster from "../assets/Marvel_Poster.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden text-white">
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Bg_Video}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      />  */}

      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={poster}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">Bioscope</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Dive into a world of stories. Stream the latest movies and series now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-300 transition">
            Start Watching
          </button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
            Browse Library
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
