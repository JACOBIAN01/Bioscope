import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Bioscope. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-8 mb-1">
          {/* GitHub Link */}
          <a
            href="https://github.com/JACOBIAN01" // Replace with your actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/subhadeep-ghorai/" // Replace with your actual LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-500 transition"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
        <p className="text-sm text-gray-300">Made with ❤️ by Subhadeep</p>
      </div>
    </footer>
  );
};

export default Footer;
