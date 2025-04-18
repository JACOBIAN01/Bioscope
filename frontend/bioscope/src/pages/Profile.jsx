import React from "react";
import LogOut from "./Logout";
import Navbar from "../components/Navbar";
import userImage from "../assets/User.webp";
import { GetUserData } from "../pages/AuthState";

const ProfilePage = () => {

  const Data = GetUserData();
  const Name = Data.name;
  const Email = Data.email;


  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <Navbar />

        <div className="text-center pt-10">
          <img
            className="h-40 w-40 rounded-full m-auto shadow-lg border-4 border-cyan-400"
            src={userImage}
            alt="User"
          />

          <p className="bg-cyan-600/20 w-80 py-3 px-4 m-auto mt-6 mb-4 border border-cyan-400 rounded-full font-semibold text-xl text-cyan-200 shadow-sm">
           {Name}
          </p>

          <p className="bg-cyan-600/20 w-80 py-3 px-4 m-auto mt-4 mb-4 border border-cyan-400 rounded-full font-semibold text-xl text-cyan-200 shadow-sm">
           {Email}
          </p>
        </div>

        <div className="flex items-center justify-center mt-12">
          <LogOut />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
