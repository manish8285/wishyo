import { Badge, Dialog, DialogTitle, IconButton, List, ListItem, ListItemText } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineBell,AiOutlineNotification} from "react-icons/ai"
import { AuthContext } from '../context/AuthContext';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../firebase';


export const NotificationDialog=(props)=>{
    const [notifications,setNotifications] = useState([])
    const { onClose, selectedValue, open } = props;
    const {currentUser} = useContext(AuthContext)
    const handleClose = () => {
      onClose(selectedValue);
    };

    useEffect(async()=>{
      if(currentUser){
        console.log("calling...")
        const notificationDocRef = doc(db,"notifications",currentUser.user.uid)
            const notificationDocSnapshot = await getDoc(notificationDocRef)

            if(!notificationDocSnapshot.exists()){
              try{
                await setDoc(notificationDocRef,{
                    notifications:[]
                })
              }catch(error){
                console.log(error)
              }
            }
      }
    },[])

    useEffect(()=>{
      if(currentUser){
        const unsub =onSnapshot(doc(db,"notifications",currentUser.user.uid),(data)=>{
          data.exists() && setNotifications(data.data().notifications)
          
      })
  //setChat(CHAT.messages)
  return ()=>{
      unsub()
  }
      }
    },[currentUser])

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Notifications</DialogTitle>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {notifications.map((value) => (
        <ListItem
          key={value}
          
          secondaryAction={
            <IconButton aria-label="comment">
              <AiOutlineNotification />
            </IconButton>
          }
        >
          <ListItemText primary={`Line item ${value}`} />
        </ListItem>
      ))}
    </List>
    </Dialog>
  )
}

const Notification = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
    const [notifications,setNotifications] = useState([])
    const getAllNotifications=()=>{

    }

  return (
    <div>
        <Badge badgeContent={5} className='cursor-pointer' onClick={handleClickOpen} color="primary">
            <AiOutlineBell size={25} />
        </Badge> 
        <NotificationDialog  selectedValue={selectedValue} open={open} onClose={handleClose} />   
    </div>
  )
}

export default Notification