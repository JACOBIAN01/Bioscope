import React from "react";
import {Link} from "react-router-dom"
import logo from "../assets/Logo2B.png"
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate  = useNavigate();
   const SignUP = () => {
     navigate("/signup");
   };

      const Login = () => {
        navigate("/login");
      };


  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="bioscope logo" className="h-10 w-10 rounded-xl" />
        <span className="text-2xl font-extrabold text-yellow-400 tracking-wide">
          Bioscope
        </span>
      </div>

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
    </nav>
  );
};

export default Navbar;
