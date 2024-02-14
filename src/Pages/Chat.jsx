import { Avatar } from '@mui/material'
import { Timestamp, arrayUnion, doc, getDoc, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import {BsCameraVideo, BsCardImage} from "react-icons/bs"
import {FiMoreHorizontal} from "react-icons/fi"
import {IoIosAttach} from "react-icons/io"
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { CHAT } from '../assets/chat'
import MessageInput from '../componets/chat/MessageInput'
import Message from '../componets/chat/Message'

const Chat = () => {
    const {currentUser} = useContext(AuthContext)
    const [chat,setChat]= useState([])
    
  
    let msgDate =""
  
    const scrollToBottom=()=>{
      let msgBox = document.querySelector(".message-content-section")
      setTimeout(() => {
        msgBox.scrollTop = msgBox.scrollHeight;
    }, 0);
  }

    useEffect(()=>{
        console.log("c ui - "+currentUser)
                if(currentUser){
                const unsub =onSnapshot(doc(db,"chats",currentUser.user.uid),(data)=>{
                    data.exists() && setChat(data.data().messages)
                    scrollToBottom()
                })
            //setChat(CHAT.messages)
            return ()=>{
                unsub()
            }

        }
    },[currentUser])
  
    
  
    
  
    const markAsSolved=()=>{
      setChat([...chat,{query:{status:"solved",rating:0},date:"3 Sep 2023",time:"02:00 PM",user:{name:"User 1",role:"user"}}])
      scrollToBottom()
    }
  
  
    
    


    useEffect(()=>{
        console.log(chat)
    },[chat])

  return (
    <div className='w-full h-screen bg-primary flex items-center justify-center flex flex-col'>
            <div className='mx-1 sm:w-3/4 h-3/4 border rounded-lg flex flex-col' >
                <div className='info-section flex justify-between text-white rounded-t-lg bg-secondary p-5'>
                    <div className='font-medium' ><h2>Wishyo </h2></div>
                    <div className='flex space-x-2'>
                        <BsCameraVideo className='cursor-pointer' size={20}  />
                        <FiMoreHorizontal className='cursor-pointer' size={20} />         
                    </div>
                </div>
                <div className='message-content-section bg-blue-50 scroll-y'>
                    <div className='message-box w-full p-2 flex'>
                        <div className='space-y-1 w-20'>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <p className='text-gray-500 text-xs'>Just Now</p>
                        </div>
                        <div className='flex-grow' style={{minHeight:"5px"}}>
                            <div className='message-content bg-blue-300 w-2/4 text-white rounded-r-xl rounded-b-xl p-2'  >
                                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda ipsa corrupti. Vitae facilis voluptatibus, fugiat accusamus perferendis dolores distinctio? </p>
                            </div>
                        </div>
                    </div>
                    <div className='message-box-right w-full p-2 flex justify-end flex-row-reverse space-x-5'>
                        <div className='space-y-1 w-20'>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <p className='text-gray-500 text-xs'>Just Now</p>
                        </div>
                        <div className='flex flex-grow justify-end flex-end inline' style={{minHeight:"5px"}}>
                            <div style={{maxWidth:"50%"}} className='message-content bg-blue-300 max-w-2/4 text-white rounded-l-xl mr-5 rounded-b-xl p-2'  >
                                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda ipsa corrupti. Vitae facilis voluptatibus, fugiat accusamus perferendis dolores distinctio? </p>
                            </div>
                        </div>
                        
                    </div>

                    {
                        chat.map((message,key)=>(
                            <Message message={message} key={key} />
                        ))
                    }

                    
                </div>

                <div className="input-box">
                    <MessageInput />
                </div>
            </div>
            
        </div>
  )
}

export default Chat