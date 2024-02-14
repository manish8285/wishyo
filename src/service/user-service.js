import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const LoginUser=async(email,password)=>{
    try{
    const res = await signInWithEmailAndPassword(auth,email,password)
    console.log(res)
    }catch(error){
        console.log(error)
        return null
    } 
}

export const isLogedIn=()=>{
    return localStorage.getItem("user") != null
}

export const getCurrentUser=()=>{
    if(isLogedIn()){
       return JSON.parse(localStorage.getItem("user"))
    }else{
        return null
    }
}


export const LogOutUser=()=>{

        const { updateCurrentUser } = useContext(AuthContext);
    
        const handleLogout = async () => {
            try {
                await signOut(auth);
                updateCurrentUser(null);
            } catch (error) {
                console.log(error);
            }
        };
        handleLogout()
    
        return null; // You can return something meaningful if needed

}