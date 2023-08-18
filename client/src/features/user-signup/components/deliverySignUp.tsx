import { IonIcon } from "@ionic/react";
import { bicycleOutline, callOutline, chevronDownCircleOutline, walkOutline } from "ionicons/icons";
import ImageInput from "../../../partials/imageInput";
import { useImageUpload } from "../hooks/useImageUpload";
import { useNavigate } from "react-router";
import { Card } from "react-bootstrap";
import "../assets/css/delivery-signup.css";
import { useDeliverySignUp } from "../hooks/useDeliverySignUp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMotorcycle } from '@fortawesome/free-solid-svg-icons'

const DeliverySignUp = () => {
  const { imageURL, setImage, errorImage, upload_image } = useImageUpload(
    "/customerProfilePicture.jpg"
  );
  const {
    transportation,
    setTransportation,
    phone_number,
    setPhoneNumber,
    loading,
    error,
    setError,
    signup,
  } = useDeliverySignUp();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(phone_number, imageURL);
  };

  return (
    <Card className="manager-signup">
      <div className="delivery-signup">
        <Card.Header>
          <h2>Delivery Man Registration</h2>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <ImageInput
              imageURL={imageURL}
              setImage={setImage}
              upload_image={upload_image}
            />
            <div className="inputbox mx-auto">
              <IonIcon icon={callOutline}></IonIcon>
              <input
                type="text"
                pattern="[01]{2}[3-9]{1}[0-9]{8}"
                id="phone"
                name="phone"
                required
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label htmlFor="">Phone Number</label>
            </div>
            <div className="mx-auto">
            <label htmlFor="">Transportation Mode</label>
            <div className="radio-button-group">
              <button type="button" className={`radio-button ${
                transportation === "cycle"
                  ? "radio-button"
                  : "radio-button-outline"
              }`} onClick={()=>{setTransportation("cycle")}}>Bicycle <IonIcon icon={bicycleOutline}/></button>
              <button type="button" className={`radio-button ${
                transportation === "bike"
                  ? "radio-button"
                  : "radio-button-outline"
              }`} onClick={()=>{setTransportation("bike")}}>Moto <FontAwesomeIcon icon={faMotorcycle} /></button>
              <button type="button" className={`radio-button ${
                transportation === "walk"
                  ? "radio-button"
                  : "radio-button-outline"
              }`} onClick={()=>{setTransportation("walk")}}>Walking <IonIcon icon={walkOutline}/></button>
            </div>
            </div>
            <button
              type="submit"
              className="custom-button"
              name="submit"
              id="submit"
            >
              Register
            </button>
          </form>
        </Card.Body>
      </div>
    </Card>
  );
};

export default DeliverySignUp;