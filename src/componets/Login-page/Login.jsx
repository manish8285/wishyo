import React, { useContext, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { RiGoogleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Alert } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
``

const Login = ({loginSignupClose}) => {
  let {currentUser,updateCurrentUser} = useContext(AuthContext)
  const [err ,setErr] = useState(false)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const handleSubmit=async(e)=> {
    console.log("login function called")
    setErr(false)
    setLoading(true)
    e.preventDefault();

    const email = e.target[0].value
    const password = e.target[1].value

    try{
      const res =await signInWithEmailAndPassword(auth,email,password)
      updateCurrentUser(res)
      if(loginSignupClose){
        console.log("current user ="+ currentUser)
        loginSignupClose()
      }else{
        navigate("/");
      }
      

    }catch(error){
      setErr(true)
      setLoading(false)
      console.log(error)
    }

    
  }
  return (
    <>
      
          {
            err && (<Alert className="mb-2" severity="error">Something Went Wrong</Alert>)
          }
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                for="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <div>
                <input
                  id="email"
                  type="email"
                  className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                for="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <div>
                <input
                  id="password"
                  type="password"
                  className="appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                disabled={loading}
                type="submit"
                className="uppercase bg-red  hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                
              >
                {
                  loading?'Please Wait ...':'Log In'
                }
              </button>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="color-primary hover:underline">
                Forgot password?
              </a>
            </div>
          </form>

            {/* <div className="mt-4">
              <p className="text-center text-gray-600">Or log in with:</p>
              <div className="flex justify-center mt-2">
                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2"
                >
                  <BiLogoTwitter />
                </a>
                <a
                  href="#"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
                >
                  <RiGoogleFill />
                </a>
              </div>
            </div> */}

    </>
  );
};

export default Login;
