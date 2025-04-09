import React from "react";
import HomePage from "./pages/Home";
import { Routes,Route } from "react-router-dom";


function App(){
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<HomePage />} />
      <Route path="/signup" element={<HomePage />} />
    </Routes>
  );
}

export default App;