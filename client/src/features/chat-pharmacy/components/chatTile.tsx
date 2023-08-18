import ChatTileElement from "./chatTileElement";
import { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipsesOutline, searchCircleOutline } from "ionicons/icons";
import '../assets/css/chat-tile.css';

interface ChatTileProps{
  notifications:boolean;
  setNotifications:React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatTile = ({notifications,setNotifications}:ChatTileProps) => {
  const sender=[
    {
      senderID:"123",
  imageURL:"/customerProfilePicture.jpg",
  senderName:"John Doe",
  message:"Hello World",
  datetime:new Date(),
  senderType:"customer",
  notifications:1
    },{
      senderID:"234",
  imageURL:"/pharmacyProfilePicture.png",
  senderName:"Jane Doe",
  message:"Hello Earth",
  senderType:"customer",
  datetime:new Date(),
  notifications:2
    },{
      senderID:"345",
  imageURL:"/brokenProfilePicture.jpg",
  senderName:"Someone",
  message:"Hello Venus",
  senderType:"delivery",
  datetime:new Date(),
  notifications:3
    }
  ];

  return ( 
    <div className="chat-tile">
      <button className="chat-button" onClick={()=>setNotifications(!notifications)}><IonIcon icon={chatbubbleEllipsesOutline}></IonIcon></button>
      <div className="searchbar">
      <div className='inputbox'>
        <IonIcon icon={searchCircleOutline} className="icon"></IonIcon>
        <input type="text" id="search"/>
        <label htmlFor="search">Search</label>
      </div>
      </div>
      {sender.map((send,index)=>
      <ChatTileElement senderID={send.senderID} imageURL={send.imageURL} senderName={send.senderName} message={send.message} datetime={send.datetime} senderType={send.senderType} notifications={send.notifications}/>
      )}
    </div>
    
   );
}
 
export default ChatTile;

