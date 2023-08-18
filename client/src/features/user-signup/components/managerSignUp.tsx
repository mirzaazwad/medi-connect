import { IonIcon } from "@ionic/react";
import {
  callOutline,
  homeOutline,
  timeOutline,
  timerOutline,
} from "ionicons/icons";
import ImageInput from "../../../partials/imageInput";
import { useImageUpload } from "../hooks/useImageUpload";
import { useNavigate } from "react-router";
import Map from "../../maps/components/map-card/map";
import { useMap } from "../../maps/hooks/useMap";
import { Card } from "react-bootstrap";
import "../assets/css/manager-signup.css";
import AddressInputDesktop from "../../maps/components/address-input-desktop";
import AddressInputPhone from "../../maps/components/address-input-mobile";
import { useManagerSignUp } from "../hooks/useManagerSignUp";

const ManagerSignUp = () => {
  const { imageURL, setImage, errorImage, upload_image } = useImageUpload(
    "/pharmacyProfilePicture.png"
  );
  const {
    laundry_name,
    setLaundryName,
    opening_time,
    setOpeningTime,
    closing_time,
    setClosingTime,
    phone_number,
    setPhoneNumber,
    loading,
    error,
    setError,
    signup,
  } = useManagerSignUp();
  const { address, location, placesAutoComplete } = useMap();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(phone_number, imageURL, address.address, location.location);
  };

  return (
    <Card className="manager-signup">
      <Card.Header>
        <h2>Pharmacy Registration</h2>
      </Card.Header>
      <Card.Body>
        <div className="manager-signup-container">
          <div className="manager-signup-content">
            <form onSubmit={handleSubmit}>
              <ImageInput
                imageURL={imageURL}
                setImage={setImage}
                upload_image={upload_image}
              />
              <div className="inputbox mx-auto">
                <IonIcon icon={homeOutline}></IonIcon>
                <input
                  type="text"
                  required
                  id="laundry_name"
                  name="laundry_name"
                  value={laundry_name}
                  onChange={(e) => setLaundryName(e.target.value)}
                />
                <label htmlFor="">Laundry Name</label>
              </div>
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
              <div className="address-input-phone">
                <AddressInputPhone
                  address={address}
                  location={location}
                  placesAutoComplete={placesAutoComplete}
                  disabled={false}
                />
              </div>
              <div className="address-input-desktop">
                <AddressInputDesktop
                  address={address}
                  placesAutoComplete={placesAutoComplete}
                />
              </div>
              <div className="inputbox mx-auto">
                <IonIcon icon={timeOutline}></IonIcon>
                <input
                  type="time"
                  name="openingTime"
                  id="openingTime"
                  value={opening_time}
                  onChange={(e) => setOpeningTime(e.target.value)}
                />
                <label htmlFor="openingTime">Opening Time</label>
              </div>
              <div className="inputbox mx-auto">
                <IonIcon icon={timerOutline}></IonIcon>
                <input
                  type="time"
                  name="closingTime"
                  id="closingTime"
                  value={closing_time}
                  onChange={(e) => setClosingTime(e.target.value)}
                />
                <label htmlFor="closingTime">Closing Time</label>
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
          </div>
          <div className="manager-signup-map">
            <Map
              location={location.location}
              setLocation={location.setLocation}
              setAddress={address.setAddress}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ManagerSignUp;
