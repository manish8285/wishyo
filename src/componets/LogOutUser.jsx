import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const LogOutUser = () => {
    const {updateCurrentUser} = useContext(AuthContext)
    let navigate = useNavigate()   
    const Logout=async()=>{
        try{
        await signOut(auth)
        updateCurrentUser(null)
        navigate("/")
        }catch(error){
            console.log(error)
        }

    }

  return (
    <button onClick={Logout} >Logout</button>
  )
}

export default LogOutUser