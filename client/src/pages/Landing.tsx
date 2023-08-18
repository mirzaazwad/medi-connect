import { useState } from "react";
import NavbarLanding from "../partials/navbarLanding";
import '../assets/css/landing.css';
import { arrowForwardCircleOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const[location,setLocation]=useState<string>("Login");
  const navigate=useNavigate();
  return ( 
  <div className="landing">
    <NavbarLanding/>
    <div className="landing-container">
        <div className="landing-card">
          <div className="landing-content">
            <span className="heading">Healthcare Management System</span>
            <h1>MediConnect</h1>
            <p>
            MediConnect is a versatile medical platform that provides services to connect patients with
licensed healthcare professionals, enabling convenient and accessible healthcare solutions
            </p>
          </div>
          <div className="get-started">
            <button
              className="custom-button"
              onClick={() => navigate("/signin")}
            >
              <span>Get Started</span>
              <IonIcon
                icon={arrowForwardCircleOutline}
                className="get-started-icon"
              ></IonIcon>
            </button>
          </div>
        </div>
      </div>
      <div className="landing-image">
        <img src="/landing-background.jpg" width="100%" alt="landing-background" />
      </div>
  </div>
   );
}
 
export default Landing;