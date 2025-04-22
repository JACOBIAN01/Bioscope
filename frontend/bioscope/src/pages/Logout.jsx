import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../components/CustomAlert";
import { useState } from "react";

const LogOutButton = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const SignOut = async () => {
    try {
      await signOut(auth);
      setMessage("User LoggedOut Succesfully!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log("SignOut Error ", error);
    }
  };

  return (
    <div>
      <CustomAlert
        message={message}
        onClose={() => {
          setMessage("");
        }}
      />
      <button
        onClick={SignOut}
        className="text-center bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600  text-black px-4 py-1 rounded-full text-sm font-bold hover:bg-yellow-300 transition h-8 items-center m-auto "
      >
        LogOut
      </button>
    </div>
  );
};

export default LogOutButton;
