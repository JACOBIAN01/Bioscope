import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../components/CustomAlert";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");

  function GoToSignUP(){
    navigate("/signup")
  }
  
  
  const HandleSignin = async (e) => {
    e.preventDefault();
    try {
      const UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAlertMessage("Logged in successfully");
      setTimeout(() => {
        setAlertMessage("");
        navigate("/watchmovie");
      },2000);
    } catch (error) {
      console.log(error);
      setAlertMessage(`Login Failed: ${error.message}`);
      setTimeout(() => setAlertMessage(""), 3000);
    }
  };

  return (
    <>
      <CustomAlert message={alertMessage} onClose={() => setAlertMessage("")} />
      <section className="h-screen flex items-center justify-center bg-gradient-to-t from-gray-700 via-gray-800 to-black text-white">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Welcome back to <span className="text-yellow-400">Bioscope</span>
          </h2>
          <form className="flex flex-col gap-4" onSubmit={HandleSignin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <button onClick={GoToSignUP} className="text-yellow-400 hover:text-yellow-500">
              Sign up
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default Signin;
