import { IonIcon } from "@ionic/react";
import {
  callOutline,
  homeOutline,
  timeOutline,
  timerOutline,
} from "ionicons/icons";
import ImageInput from "../../../partials/imageInput";
import { useImageUpload } from "../hooks/useImageUpload";
import { Card } from "react-bootstrap";
import "../assets/css/doctor-signup.css";
import { useDoctorSignUp } from "../hooks/useDoctorSignUp";

const DoctorSignUp = () => {
  const { imageURL, setImage, upload_image } = useImageUpload(
    "/doctorProfilePicture.jpg"
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

    signup,
  } = useDoctorSignUp();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(phone_number, imageURL, "address.address", {lat:1,lng:1});
  };

  return (
    <Card className="doctor-signup">
      <div className="hospital-signup">
      <Card.Header>
        <h2>Doctor Registration</h2>
      </Card.Header>
      <Card.Body>
        <div className="hospital-signup-container">
          <div className="hospital-signup-content">
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
                <label htmlFor="">Doctor Name</label>
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
        </div>
      </Card.Body>
      </div>
    </Card>
  );
};

export default DoctorSignUp;
