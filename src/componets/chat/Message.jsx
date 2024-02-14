import { Avatar } from '@mui/material'
import React from 'react'

const Message = ({message}) => {

    const getDate=(date)=>{
        const milliseconds = date.seconds * 1000 + Math.floor(date.nanoseconds / 1000000);
        const date1 = new Date(milliseconds);

        console.log(date1);
        return date1
    }

    const getTime=(date)=>{
        if(!date?.milliseconds && !date?.nanoseconds){
            return "loading"
        }
        const milliseconds = date.seconds * 1000 + Math.floor(date.nanoseconds / 1000000);
        const date1 = new Date(milliseconds);

        console.log(date1);
        return `${date1.getHours()} : ${date1.getMinutes()}`
    }
  return (
    <div className='message-box-right w-full p-2 flex justify-end flex-row-reverse space-x-5'>
                                <div className='space-y-1 w-20'>
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                <p className='text-gray-500 text-xs'>{getTime(message.date)}</p>
                                </div>
                                <div className='flex flex-grow justify-end flex-end inline' style={{minHeight:"5px"}}>
                                    <div className='message-content bg-blue-300 max-w-2/4  text-white rounded-l-xl mr-5 rounded-b-xl p-2'  >
                                        <p>{message.text} </p>
                                    </div>
                                </div>
                                
                            </div>
  )
}

export default Message