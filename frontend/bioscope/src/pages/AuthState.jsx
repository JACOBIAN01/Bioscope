import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../../firebase";
import { useEffect,useState } from "react";


const useAuth = ()=>{
    const [currentUser,setCurrentUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
        });
        return()=>unsubscribe();

    },[]);
    return currentUser;
}

export default useAuth;