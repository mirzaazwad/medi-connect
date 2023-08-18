import { useState } from "react";
import { Send } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { IonIcon } from "@ionic/react";
import { sendSharp } from "ionicons/icons";
import '../assets/css/send-message.css';

type SendMessageChatRoomProps={
  imageURL:string,
  senderID:string,
  receiverID:string
} 

const SendMessageChatRoom = ({imageURL,senderID,receiverID}:SendMessageChatRoomProps) => {
  const [message, setMessage] = useState("");
  const navigate=useNavigate();
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {

  };
  return (
    <form
      className="d-flex message"
      onSubmit={handleSubmit}
    >
      <img
        src={imageURL}
        alt="avatar 3"
        className="chatSenderImage"
      />
      <div className="input-group">
      <input
        type="text"
        className="form-control form-control-sm"
        placeholder="Type message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="button-submit-send"><IonIcon icon={sendSharp}></IonIcon></button>
      </div>
    </form>
  );
};

export default SendMessageChatRoom;