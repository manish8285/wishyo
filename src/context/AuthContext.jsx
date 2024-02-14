import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { UserMinusIcon } from "@heroicons/react/24/outline";
import { getCurrentUser } from "../service/user-service";


export const AuthContext = createContext();

const AuthContextProvider =({children})=>{
    const [currentUser,setCurrentUser]= useState(null)

    const updateCurrentUser=(user)=>{
        localStorage.setItem("user",JSON.stringify(user))
        setCurrentUser(user)
    }

    useEffect(()=>{
        setCurrentUser(getCurrentUser())
    },[])
    
    // useEffect(()=>{
    //     const unsub = onAuthStateChanged(auth,(user)=>{
    //         console.log("state changed" + user)
    //         setCurrentUser(user)

    //         // if (user) {
    //         //     // Handle the user object when the user is signed in
    //         //     console.log("User signed in: " + JSON.stringify(user));
    //         //     setCurrentUser(user);
    //         //   } else {
    //         //     // Handle the case when the user signs out or is not signed in
    //         //     console.log("User signed out or not signed in.");
    //         //     //setCurrentUser(null);
    //         //   }
    //     })
    //     return ()=>{
    //         unsub()
    //     }
    // },[])

    

    return (
        <AuthContext.Provider value={{currentUser,updateCurrentUser}}>
                {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider