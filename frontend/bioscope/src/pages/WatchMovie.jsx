import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hls from "hls.js";
import { useNavigate } from "react-router-dom";

const WatchMovie = () => {

  const { PlayBackId } = useParams();
  const decodedUrl = decodeURIComponent(PlayBackId);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const HandleHome = ()=>{
    navigate("/watchmovie")
  }
  
  useEffect(() => {
    
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(decodedUrl);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("HLS.js error:", data);
      });

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {

      videoRef.current.src = decodedUrl;
    }
  }, [decodedUrl]);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="flex justify-center items-center mt-8">
        <div className="w-full max-w-4xl px-4">
          <video
            ref={videoRef}
            controls
            className="w-full rounded-2xl border-4 border-yellow-500"
          />
        </div>
      </div>

      <div className="flex justify-center m-20">
        <button 
        onClick={HandleHome}
        className="text-center bg-yellow-400 text-gray-900 px-6 py-1 rounded-full text-sm font-bold hover:bg-yellow-300 transition h-8 items-center m-auto ">
          Home
        </button>
      </div>
    </div>
  );
};

export default WatchMovie;
