import { IonIcon } from "@ionic/react";
import { callOutline, mapOutline } from "ionicons/icons";
import ImageInput from "../../../partials/imageInput";
import { useImageUpload } from "../hooks/useImageUpload";
import { useNavigate } from "react-router";
import { useCustomerSignUp } from "../hooks/useCustomerSignUp";
import Map from "../../maps/components/map-card/map";
import { useMap } from "../../maps/hooks/useMap";
import { Card } from "react-bootstrap";
import "../assets/css/customer-signup.css";
import AddressInputDesktop from "../../maps/components/address-input-desktop";
import AddressInputPhone from "../../maps/components/address-input-mobile";

const CustomerSignUp = () => {
  const { imageURL, setImage, errorImage, upload_image } = useImageUpload(
    "/customerProfilePicture.jpg"
  );
  const {
    phone_number,
    setPhoneNumber,
    loading,
    error,
    setError,
    signup,
  } = useCustomerSignUp();
  const { address, location, placesAutoComplete } = useMap();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(phone_number, imageURL, address.address, location.location);
  };

  return (
    <Card className="customer-signup">
      <Card.Header>
        <h2>Customer Registration</h2>
      </Card.Header>
      <Card.Body>
        <div className="customer-signup-container">
          <div className="customer-signup-content">
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
              <div className="address-input-phone">
                <AddressInputPhone address={address} location={location} placesAutoComplete={placesAutoComplete} disabled={false}/>
              </div>
              <div className="address-input-desktop">
                <AddressInputDesktop address={address} placesAutoComplete={placesAutoComplete}/>
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
          <div className="customer-signup-map">
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

export default CustomerSignUp;
