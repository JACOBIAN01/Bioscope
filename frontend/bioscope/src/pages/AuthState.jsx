import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../../firebase";
import { useEffect,useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth} from "firebase/auth";


export const GetLoginStatus = ()=>{
 const auth = getAuth();
   const [UserLoggedIn, setUserLoggedIN] = useState(false);
   onAuthStateChanged(auth, (user) => {
     if (user) {
       setUserLoggedIN(true);
     } else {
       setUserLoggedIN(false);
     }
   });
   return UserLoggedIn;
}



export const GetUserData = ()=>{

    const [UserData,setUserdata] = useState("");

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
                 console.log("User Not Found!");
                }, 2000);
              }
            } else {
              setTimeout(() => {
               console.log("No User Logged In");
              }, 2000);
            }
          } catch (error) {
            setTimeout(() => {
              console.log("Authentication Error ", error);
            }, 2000);
          }
        };
        getUserData();
      }, [setUserdata]);

      return UserData;
}
