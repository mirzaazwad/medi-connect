import NavbarPharmacy from "../../../partials/navbarPharmacy";
import ChatTile from "./chatTile";
import '../assets/css/chat-page.css';
import '../assets/css/chat.css';
import ChatBox from "./chatBox";
import SendMessageChatRoom from "./chatSendMessage";
import {useEffect,useState} from 'react';
import NavbarDelivery from "../../../partials/navbarDelivery";

const ChatDelivery = () => {
  const [notifications,setNotifications]=useState(false);

  useEffect(() => {
    const toggler = () => {
      let chatTile = document.querySelector(".chat-tile");
      let chatPage = document.querySelector(".chat-page");
      let search = document.querySelector(".searchbar");
      let message = document.querySelector(".message");
      search?.classList.toggle('active');
      chatTile?.classList.toggle("active");
      chatPage?.classList.toggle("active");
      message?.classList.toggle("active");
    };
    toggler();
  }, [notifications]);
  return ( 
  <div className="chat-room">
    <ChatTile notifications={notifications} setNotifications={setNotifications}/>
    <NavbarDelivery/>
    <div className="chat-page">
    <ChatBox/>
    <SendMessageChatRoom imageURL="/customerProfilePicture.jpg" senderID="123" receiverID="1234"/>
  </div> 
  </div>
  );
}
 
export default ChatDelivery;