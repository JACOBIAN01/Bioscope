import React from "react";
import {Link} from "react-router-dom"
import logo from "../assets/LogoTitle.png"



export const BrandLogo = ()=>{
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-gray-800 p-1 rounded-lg shadow-md">
        <img
          src={logo}
          alt="Bioscope logo"
          className="h-13 w-13 rounded-xl shadow-lg border-2 border-yellow-400"
        />
      </div>
      <span className="text-xl font-extrabold text-yellow-400 tracking-wider hover:text-yellow-300 transition duration-300 ease-in-out">
        Bioscope
      </span>
    </div>
  );
}

export const SignCombo = ()=>{

return (
  <div className="flex items-center space-x-4">
    <Link
      to="/signin"
      className="hover:text-yellow-400 transition text-sm font-medium"
    >
      Sign In
    </Link>
    <Link
      to="/signup"
      className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold hover:bg-yellow-300 transition"
    >
      Sign Up
    </Link>
  </div>
);
}




function Navbar() {

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-4 flex justify-between items-center shadow-md">
    <BrandLogo/>
    <SignCombo/> 
    </nav>
  );
};

export default Navbar;
