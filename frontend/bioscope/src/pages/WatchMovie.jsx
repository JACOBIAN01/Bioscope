import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const WatchMovie = () => {
  const { PlayBackId } = useParams();

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="flex justify-center items-center mt-8">
        <div className="w-full max-w-4xl">
          <video
            controls
            className="w-full rounded-2xl border-4 border-yellow-500"
          >
            <source src={PlayBackId} type="application/x-mpegURL">
                Your Browser does not support the video tag!
            </source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default WatchMovie;
