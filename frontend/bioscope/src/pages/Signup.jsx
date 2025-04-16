import React from "react";
import { useState} from "react";
import {createUserWithEmailAndPassword}  from "firebase/auth"
import {auth,db} from "../../firebase";
import CustomAlert from "../components/CustomAlert";
import { useNavigate } from "react-router-dom";
import {doc,setDoc} from "firebase/firestore";


const Signup = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const [alertMessage,setAlertMessage] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const [name,setName] = useState("");

  function GoToSignIN(){
      navigate("/signin")
  }


  const handleSignup = async(e)=>{
      e.preventDefault();
      setIsLoading(true);
      try{
        const userData = await createUserWithEmailAndPassword(auth,email,password);
        const user = userData.user;
        
        await setDoc(doc(db,"users",user.uid),{
          name:name,
          email:user.email,
        })

        setEmail("");
        setPassword("");
        setAlertMessage(`Sign up Successfully!`)
         setTimeout(() => {
           setAlertMessage("");
           navigate("/watchmovie");
         }, 2000);
      }catch(error){
       let errorMessage = `An error occurred. Please try again. ${error}`;
       if (error.code === "auth/email-already-in-use") {
         errorMessage = "This email is already in use.";
       } else if (error.code === "auth/weak-password") {
         errorMessage = "Password should be at least 6 characters.";
       }
       setAlertMessage(`Sign up Error: ${errorMessage}`);
      }
      setIsLoading(false)
  }

  return (
    <>
    <CustomAlert message={alertMessage} onClose={()=>setAlertMessage("")}/>
      <section className="h-screen flex items-center justify-center bg-gradient-to-t from-gray-700 via-gray-800 to-black text-white">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Create your <span className="text-yellow-400">Bioscope</span>{" "}
            account
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
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
              {isLoading?"Signing Up....":"Sign Up"}
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <button onClick={GoToSignIN} className="text-yellow-400 hover:text-yellow-500">
              Sign in
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default Signup;
