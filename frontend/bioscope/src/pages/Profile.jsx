import React from "react";
import LogOut from "./Logout";
import Navbar from "../components/Navbar";
import userImage from "../assets/User.webp";


const ProfilePage = () => {
  return (
    <>
      <div className=" w-full h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
        <Navbar />

        <div className="text-center">
          <img
            className="h-40 w-40 rounded-3xl m-auto"
            src={userImage}
          />
          <p className="bg-cyan-300 h-10 w-80 p-2 m-auto  mt-5 mb-5 border-2 border-gray-800 rounded-3xl font-bold text-xl">
            User Name
          </p>
          <p className="bg-cyan-300 h-10 w-100 p-2 m-auto  mt-5 mb-5 border-2 border-gray-800 rounded-3xl font-bold text-xl">
            User Email
          </p>
        </div>

        <div className="flex items-center justify-center mt-10">
          <LogOut />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
