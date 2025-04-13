import React from "react";

const CustomAlert = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-3 rounded-xl shadow-lg z-50 flex items-center justify-between gap-4">
      <span className="font-semibold">{message}</span>
      <button
        onClick={onClose}
        className="text-black font-bold hover:text-gray-700 transition"
      >
        ✖️
      </button>
    </div>
  );
};

export default CustomAlert;
