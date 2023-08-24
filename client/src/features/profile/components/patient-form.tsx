import {  useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loader from "../../../partials/loader";
import useCustomerForm from "../hooks/useCustomerForm";
import { callOutline, mailUnreadOutline, personCircleOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import AddressInputPhone from "../../maps/components/address-input-mobile";
import { useMap } from "../../maps/hooks/useMap";
import ConfirmPasswordModal from "./confirm-password-modal";

const ProfileFormPatient = () => {
  const [isDisabled,turnOnEdit]=useState<boolean>(true);
  const email="mirzaazwad8@gmail.com";
  const {username,setUsername,password,setPassword,phone,setPhoneNumber,isLoading,error}=useCustomerForm(email);
  const { address, location, placesAutoComplete } = useMap();
  const [passwordVisibility,setPasswordVisibility]=useState("password");
  const [show,setShow]=useState(false);

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  }

  if(!isLoading){ 
    return (
      <div>
        <div className="profileInfo d-flex justify-content-between">
          <h4 className="InfoHeader mb-4">Personal Information</h4>
          <button
            className="btn btn-outline-dark btn-editProfile "
            onClick={()=>turnOnEdit(!isDisabled)}
          >
            Edit <span className="mobile-view"> Profile</span>
            <i className="bx bx-cog bx-sm"></i>
          </button>
        </div>
        <Form>
        <div className="error" style={{color:"red"}}>{error}</div>

          <div className="inputbox">
            <IonIcon icon={personCircleOutline}></IonIcon>
            <input
              type="text"
              disabled={isDisabled}
              value={username}
              id="username"
              onChange={(e)=>setUsername(e.target.value)}
              />
              <label htmlFor="username">Name</label>
          </div>
          <div className="inputbox">
          <IonIcon icon={callOutline}></IonIcon>
          <input type="text" pattern="[01]{2}[3-9]{1}[0-9]{8}" disabled={isDisabled} value ={phone} id="phone" onChange={(e)=>setPhoneNumber(e.target.value)} />
          <label htmlFor="phone">Contact No.</label>
        </div>
        <div className="inputbox">
          <IonIcon icon={mailUnreadOutline}></IonIcon>
          <input type="email" disabled={true} value ={email} id="email" />
        </div>
         <div className="addressbox">
         <AddressInputPhone address={address} location={location} placesAutoComplete={placesAutoComplete} disabled={isDisabled}/>
         </div>
          {/* {!googleId && isEditing &&(<a href={"changePassword/" + user._id} style={{marginLeft:"75%"}}>Change Password</a>)} */}
        {!isDisabled && (
          <Button className="btn btn-outline-dark btn-save" disabled={isLoading}>
            Save
          </Button>
        )}
      </Form>
      <ConfirmPasswordModal show={show} handleClose={()=>setShow(false)} handleSubmit={handleSubmit} error={error} passwordVisibility={{passwordVisibility,setPasswordVisibility}} password={{password:password,setPassword:setPassword}}/>
      </div>
    );
  }
  else{
    return (
      <Loader/>
    );
  }
};
export default ProfileFormPatient;
