import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hls from "hls.js";

const WatchMovie = () => {

  const { PlayBackId } = useParams();
  const decodedUrl = decodeURIComponent(PlayBackId);
  const videoRef = useRef(null);

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
      // For Safari
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
    </div>
  );
};

export default WatchMovie;
