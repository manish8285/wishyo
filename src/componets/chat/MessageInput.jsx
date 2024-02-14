import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Timestamp, arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import {IoIosAttach} from "react-icons/io"
import {BsCameraVideo, BsCardImage} from "react-icons/bs"
import { Box, Button, FormControl, Input, InputLabel, Modal } from '@mui/material';
import {v4 as uuid} from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

export const IMAGE_PREVIEW_STYLE = {
    position: 'absolute',
  top: '50%',
  left: '50%',

  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
}

const MessageInput = () => {
    const {currentUser} = useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const [selectedFile,setSelectedFile]= useState()
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false);setSelectedFile("")};
    const [message, setMessage] = useState({
      senderId:"",
      date: "",
      text:"",
      time:""
    })

    const sendMessage=async()=>{
        let sendingMessage = {...message,senderId:currentUser.user.uid, date:Timestamp.now()}
        try{

            const chatDocRef = doc(db,"chats",currentUser.user.uid)
            const chatDocSnapshot = await getDoc(chatDocRef)

            if(!chatDocSnapshot.exists()){
                await setDoc(chatDocRef,{
                    messages:[]
                })
            }

           await updateDoc(chatDocRef,{
                messages:arrayUnion(sendingMessage)
            })

            const UserChatDocRef = doc(db,"userChats",currentUser.user.uid)
            const userChatDocSnapshot = await getDoc(UserChatDocRef)
            if(!userChatDocSnapshot.exists()){
                setDoc(UserChatDocRef,sendingMessage)
            }else{
                await updateDoc(UserChatDocRef,sendingMessage)
            }

            

            setMessage({...message,text:""})
            console.log("message sent successfully ...")
        }catch(error){
            console.log(error)
        }
      
      console.log(message)
    }

    const handleFileChange=(event)=>{
        setSelectedFile(event.target.files[0])
        handleOpen()
    }

    const sendFile=()=>{

        let textMessage= document.querySelector("#text-message").value
        setMessage({...message,text:textMessage})

        const storageRef = ref(storage,"images/"+uuid())
        const uploadTask = uploadBytesResumable(storageRef,selectedFile)
        uploadTask.on(
            (error)=>{
                console.log(error)
            },
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadUrl)=>{
                    console.log(downloadUrl)
                    setMessage((preMessage)=>({
                        ...preMessage,
                        file:downloadUrl,
                    }));
                    console.log(message)
                    //sendMessage()
                })
            }
        )
  
        handleClose()
      }

  return (
    <div className='message-writer-section bg-white flex items-center justify-between p-2'>
                <input type="text" onChange={(event)=>setMessage({...message,"text":event.target.value})} value={message.text} className='w-full focus:outline-none' placeholder='Type something' />
                <div className='flex item-center space-x-2 font-medium'>
                <input onChange={handleFileChange} type="file" name="attach_file" id="attach_file" hidden />
          < label className='text-gray-500 inline'   for="attach_file" >
            <IoIosAttach className='cursor-pointer'   size={20} />
            </label>
                    
                    <button className='text-gray-500' >
                        <BsCardImage  size={20} />
                    </button>
                    <button onClick={sendMessage} className='bg-blue-400 px-3 py-2 text-white font-medium'>
                        Send
                    </button>
                </div>

                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={IMAGE_PREVIEW_STYLE}>

          {
            selectedFile && (
              <div className='container text-right'>
                {
                  selectedFile.type.startsWith("image/")?(
                    <img width={400}  src={URL.createObjectURL(selectedFile)} alt=" File Preview" />
                  ) : (
                    <iframe 

                    
                    width={'600'}
                    height={400}
                    style={{overflow:"hidden"}}
                    
                    title='File Preview'
                    src={URL.createObjectURL(selectedFile)}>

                    </iframe>
                  )
                }
                <br />
                
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="text-message">Write your message here ...</InputLabel>
          <Input
            id="text-message" name="text-message"

            
          />
        </FormControl>
               
                {/* <div class="form-group" style={{width:"100% !important"}}>
                  <input id='text-message' name='text-message' style={{width:"100% !important"}} type="text" class="form-control" placeholder="Write your message here ..." />
                </div> */}
            
                
                <div className="container-fluid text-center">
               
                <Button onClick={sendFile} variant='contained' className='mt-2 text-right'> Send File</Button>
                
                </div>
              </div>
            )
          }
          
          
        </Box>
      </Modal>

    </div>
  )
}

export default MessageInput