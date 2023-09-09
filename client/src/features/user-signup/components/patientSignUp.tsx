import { IonIcon } from "@ionic/react";
import { callOutline } from "ionicons/icons";
import ImageInput from "../../../partials/imageInput";
import { useImageUpload } from "../hooks/useImageUpload";
import { usePatientSignUp } from "../hooks/usePatientSignUp";
import { Card } from "react-bootstrap";
import "../assets/css/doctor-signup.css";
import "../assets/css/hospital-signup.css";

const PatientSignUp = () => {
  const { imageURL, setImage, upload_image } = useImageUpload(
    "/patientProfilePicture.png"
  );
  const {
    phone_number,
    setPhoneNumber,
    signup,
  } = usePatientSignUp();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signup(phone_number, imageURL, "1232", {lat:1,lng:1});
  };

  return (
    <Card className="doctor-signup">
      <div className="hospital-signup">
      <Card.Header>
        <h2>Patient Registration</h2>
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

export default PatientSignUp;
