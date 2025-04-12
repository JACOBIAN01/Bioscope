import { signOut } from "firebase/auth";
import {auth} from "./firebase";

const SignOut = async()=>{
    try{
        await signOut(auth);
    }catch(error){
        console.log("SignOut Error ", error);
    }
}