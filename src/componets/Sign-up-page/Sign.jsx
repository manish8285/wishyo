import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { RiGoogleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { Alert } from "@mui/material";
import { doc,setDoc } from "firebase/firestore";

const Sign = (loginSignupClose) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [err,setErr] = useState(false)
  const handleSubmit=async(e)=> {
    setLoading(true)
    setErr(false)
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const referralCode = e.target[2].value
    const password = e.target[3].value
    console.log("name : "+displayName+ "+email+"+email+"+password "+password)

    try{
      const res = await createUserWithEmailAndPassword(auth,email,password);
      console.log(res)
      try{
      await setDoc(doc(db,"users",res.user.uid),{
        id:res.user.uid,
        name:displayName,
        email:email,
        referralCode,
        referralId:`REFA${Math.floor(100000 + Math.random() * 900000)}`
      })

     console.log("user created successfully")

    }catch(error){
      console.log("user not created")
      console.log(error)
    }

      setErr(false)
      setLoading(false)
      if(loginSignupClose){
        loginSignupClose()
      }

    }catch(error){
      console.log(error)
      setErr(true)
      setLoading(false)
    }


    setLoading(false);
    //navigate("/");
  }
  return (
    <>
      
          {
            err && (<Alert className="mb-2" severity="error">Something Went Wrong!</Alert>)
          }
          <form onSubmit={handleSubmit} >
          <div className="mb-6">
              <label
                for="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <div>
                <input
                  id="name"
                  type="name"
                  className="border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name"
                />
              </div>
            </div> 
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
                  className="border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className=" border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <input
                  id="referralCode"
                  type="text"
                  className="border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Referra Code (optional)"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                disabled={loading}
                type="submit"
                className="bg-red uppercase hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                
              >
                {
                  loading?'Please Wait ...':'Sign up'
                }
                
              </button>
            </div>
          </form>
          
    </>
  );
};

export default Sign;
