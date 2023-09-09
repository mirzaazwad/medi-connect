import { IonIcon } from "@ionic/react";
import {callOutline, medicalOutline, timeOutline, timerOutline } from "ionicons/icons";
import ImageInput from "../../../partials/imageInput";
import { useImageUpload } from "../hooks/useImageUpload";
import { Card } from "react-bootstrap";
import "../assets/css/hospital-signup.css";
import "../assets/css/doctor-signup.css";
import { useHospitalSignUp } from "../hooks/useHospitalSignUp";
import AddressInputPhone from "../../maps/components/address-input-mobile";
import { useMap } from "../../maps/hooks/useMap";

const HospitalSignUp = () => {
  const { imageURL, setImage, upload_image } = useImageUpload(
    "/hospitalProfilePicture.jpg"
  );
  const {
    hospital,
    setHospital,
    opening_time,
    setOpeningTime,
    closing_time,
    setClosingTime,
    phone_number,
    setPhoneNumber,
    signup,
  } = useHospitalSignUp();

  const {address, location, placesAutoComplete}=useMap();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(phone_number, imageURL);
  };

  return (
    <Card className="doctor-signup">
      <div className="hospital-signup">
        <Card.Header>
          <h2>Administrator Registration</h2>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <ImageInput
              imageURL={imageURL}
              setImage={setImage}
              upload_image={upload_image}
            />
            <div className="inputbox mx-auto">
              <IonIcon icon={medicalOutline}></IonIcon>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
              />
              <label htmlFor="">Hospital Name</label>
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
              <AddressInputPhone address={address} location={location} placesAutoComplete={placesAutoComplete} disabled={false}/>
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

export default HospitalSignUp;
