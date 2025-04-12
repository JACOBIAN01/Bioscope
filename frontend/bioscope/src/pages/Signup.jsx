import React from "react";
import { useState,useNavigate} from "react";
import {createUserWithEmailAndPassword}  from "firebase/auth"
import {auth} from "../../firebase";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSignup = async(e)=>{
      e.preventDefault();

      try{
        await createUserWithEmailAndPassword(auth,email,password);
        setEmail("");
        setPassword("");
        alert("USer Created!");
        navigate("/watchmovie")
      }catch(error){
        alert(error)
        console.log(error);
      }
  }

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-t from-gray-700 via-gray-800 to-black text-white">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create your <span className="text-yellow-400">Bioscope</span> account
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            required
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/signin" className="text-yellow-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
