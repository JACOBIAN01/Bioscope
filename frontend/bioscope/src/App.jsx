import React from "react";
import HomePage from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import MovieList from "./pages/MoviePage";


function App(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<HomePage />} />
      <Route path="/signup" element={<HomePage />} />
      <Route path="/watchmovie" element={<MovieList/>}/>
    </Routes>
  );
}

export default App;