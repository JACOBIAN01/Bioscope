import React from "react";
import HomePage from "./pages/Home";
import { Routes,Route } from "react-router-dom";
import MovieList from "./pages/MoviePage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import WatchMovie from "./pages/WatchMovie";

function App(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/watchmovie" element={<MovieList />} />
      <Route path="/watch/:PlayBackId" element={<WatchMovie/>}/>
    </Routes>
  );
}


export default App;