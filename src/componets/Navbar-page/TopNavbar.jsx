import React from 'react'
import {BsQuestionCircle} from "react-icons/bs"
import questionMark from "../../assets/questionMark.svg"
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import LogOutUser from '../LogOutUser'
const TopbarLinks =[
    
    {name:"Download App", href:"#" },
    {name:"Support", href:"#" },
    {name:"Signup",href:"#"},
    {name:"Login",href:""}
]

const TopNavbar = ({isScrolled,loginSignupOpen}) => {
  return (
  <div className="container py-1 flex items-center justify-end">
        <ul className='flex list-none justify-items-center items-center'>
        <li className=' mr-10 cursor-pointer'>
                <a className='flex' href="#">How to earn cashback   <img width={20} src={questionMark} alt="" /></a>
            </li>

            <li className='mr-10 cursor-pointer'>
                <a href="/chat">Chat Support</a>
            </li>

            <li className=' mr-10 cursor-pointer'>
                <a  href="#"><LogOutUser /> </a>
            </li>
            <li className='mr-10 cursor-pointer '>
                <a onClick={()=>loginSignupOpen('login')} href="#">Login</a>
            </li>
            <li className=' mr-10 cursor-pointer '>
                <a onClick={()=>loginSignupOpen('signup')} href="#">Signup</a>
            </li>

        </ul>
        </div>
  )
}

export default TopNavbar