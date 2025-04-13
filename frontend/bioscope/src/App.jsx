import React from "react";
import HomePage from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import MovieList from "./pages/MoviePage";
import SignUp from "./pages/Signup";
import Signin from "./pages/Signin";


function App(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/watchmovie" element={<MovieList />} />
    </Routes>
  );
}


export default App;