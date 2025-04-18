import React from "react";
import LogOut from "./Logout";
import Navbar from "../components/Navbar";
import userImage from "../assets/User.webp";
import { GetUserData } from "../pages/AuthState";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";



const ProfilePage = () => {
  const Data = GetUserData();
  const Name = Data.name;
  const Email = Data.email;
  const Navigate = useNavigate();

  const HandleMoviePage = () => {
    Navigate("/watchmovie");
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <Navbar />

        <div className="flex flex-col items-center pt-16 px-4">
          <div className="relative">
            <img
              className="h-44 w-44 rounded-full shadow-xl border-4 border-cyan-400"
              src={userImage}
              alt="User"
            />
            <div className="absolute -bottom-2 -right-2 bg-cyan-400 text-black px-2 py-1 rounded-full text-xs font-bold shadow-md">
              PRO
            </div>
          </div>

          <div className="mt-8 w-full max-w-md">
            <div className="bg-cyan-600/20 border border-cyan-400 text-cyan-200 rounded-2xl px-6 py-4 text-center shadow-md mb-4">
              <p className="text-xl font-semibold">{Name}</p>
            </div>
            <div className="bg-cyan-600/20 border border-cyan-400 text-cyan-200 rounded-2xl px-6 py-4 text-center shadow-md">
              <p className="text-xl font-semibold">{Email}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <LogOut />
            <button
              onClick={HandleMoviePage}
              className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition-transform"
            >
              🎬 Watch Movie
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};


export default ProfilePage;
