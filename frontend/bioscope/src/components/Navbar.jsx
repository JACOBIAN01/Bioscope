import React from "react";
import logo from "../assets/LogoTitle.png";
import { useNavigate } from "react-router-dom";
import userImage from "../assets/User.webp";
import {GetLoginStatus} from "../pages/AuthState";
import { GetUserData} from "../pages/AuthState";



export const BrandLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-gray-800 p-1 rounded-lg shadow-md">
        <img
          src={logo}
          alt="Bioscope logo"
          className="h-13 w-13 rounded-xl shadow-lg"
        />
      </div>
      <span className="text-xl font-extrabold text-yellow-400 tracking-wider hover:text-yellow-300 transition duration-300 ease-in-out">
        Bioscope
      </span>
    </div>
  );
};

export const SignCombo = () => {
  const navigate = useNavigate();

  function signUP() {
    navigate("/signup");
  }
  function signIN() {
    navigate("/signin");
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={signIN}
        className="hover:text-yellow-400 transition text-sm font-medium"
      >
        Sign In
      </button>
      <button
        onClick={signUP}
        className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold hover:bg-yellow-300 transition"
      >
        Sign Up
      </button>
    </div>
  );
};


export const UserNav = () => {
  const navigate = useNavigate();
  const Data = GetUserData();

  const HandleProfilePage = ()=>{
    navigate("/profile");
  }

  return (
    <div className="flex space-x-2">
      <p className="item-center m-auto font-semibold mr-2">Welcome , {Data.name}</p>
      <img className="h-15 w-15 rounded-3xl" src={userImage} />
      <button
        onClick={HandleProfilePage}
        className="text-center bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold hover:bg-yellow-300 transition h-8 items-center m-auto "
      >
        Profile
      </button>
    </div>
  );
};



function Navbar() {


  const LoggedIn = GetLoginStatus();

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-4 flex justify-between items-center shadow-md">
      <BrandLogo />
      {LoggedIn ? <UserNav /> : <SignCombo />}
    </nav>
  );
}

export default Navbar;
