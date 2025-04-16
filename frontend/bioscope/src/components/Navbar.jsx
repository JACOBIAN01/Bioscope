import React, { useEffect, useState } from "react";
import logo from "../assets/LogoTitle.png";
import { useNavigate } from "react-router-dom";
import userImage from "../assets/User.webp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import CustomAlert from "./CustomAlert";

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
  const [userData, setUserdata] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const HandleProfilePage = () => {
    navigate("/profile");
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            setUserdata(userDoc.data());
          } else {
            setTimeout(() => {
              setAlertMessage("User Data Not Found!");
            }, 2000);
          }
        } else {
          setTimeout(() => {
            setAlertMessage("No User Logged In");
          },2000);
        }
      } catch (error) {
        setTimeout(() => {
          setAlertMessage("Authentication Error ",error);
        }, 2000);
      }
    };
    getUserData();
  }, []);

  return (
    <div className="flex space-x-2">
      <CustomAlert
        message={alertMessage}
        onClose={() => {
          setAlertMessage("");
        }}
      />
      {userData && (
        <>
          <p>Welcome , {userData.name} </p>
          <img className="h-15 w-15 rounded-3xl" src={userImage} />
          <button
            onClick={HandleProfilePage}
            className="text-center bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold hover:bg-yellow-300 transition h-8 items-center m-auto "
          >
            Profile
          </button>
        </>
      )}
    </div>
  );
};

function Navbar() {
  const auth = getAuth();
  const [LoggedIn, setLoggedIN] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIN(true);
    } else {
      setLoggedIN(false);
    }
  });

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-4 flex justify-between items-center shadow-md">
      <BrandLogo />
      {LoggedIn ? <UserNav /> : <SignCombo />}
    </nav>
  );
}

export default Navbar;
