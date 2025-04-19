import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import MovieComponent from "./MovieComponent";

const MoviePage = () => {
  
  return (
    <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 h-full w-full">
      <Navbar />
      <Carousel />
      <MovieComponent />
      <Footer />
    </div>
  );
};

export default MoviePage;
