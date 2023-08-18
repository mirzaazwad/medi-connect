import NavbarLanding from "../partials/navbarLanding";
import '../assets/css/about-us.css';
import { Card } from "react-bootstrap";
import { IonIcon } from "@ionic/react";
import { logoGithub, logoLinkedin } from "ionicons/icons";

const AboutUs = () => {
  return (
  <div className="about-us">
    <NavbarLanding/>
    <div className="cards d-flex">
    <Card>
      <Card.Header className="header-pro">Developer Information</Card.Header>
      <Card.Body>
        <div className="information">
          This project is part of Therap-Javafest 2023 and was developed using the following technologies:
          <div>
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react"/>
          <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="redux"/>
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
          <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap"/>
          <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="material-ui"/>
          <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="java"/>
          <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="spirng"/>
          <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb"/>
          <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="google-cloud"/>
          <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github"/>
          </div>
          
        </div>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className="header">Mirza Mohammad Azwad</Card.Header>
      <Card.Body>
        <div>
        <span className="title">Institute:</span> Islamic University of Technology(IUT), Board Bazar, Gazipur, Dhaka, Bangladesh
        </div>
        <div>
          <span className="title">Academic Status:</span> 5th Semester, 3rd Year
        </div>
        <div className="connect">
          <IonIcon icon={logoGithub} className="icons" onClick={()=>window.location.href="https://github.com/mirzaazwad"}></IonIcon>
          <IonIcon icon={logoLinkedin} className="icons" onClick={()=>window.location.href="https://bd.linkedin.com/in/mirza-mohammad-azwad-b5239b1a4"}></IonIcon>
        </div>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className="header">Farhan Fuad</Card.Header>
      <Card.Body>
        <div>
        <span className="title">Institute:</span> Islamic University of Technology(IUT), Board Bazar, Gazipur, Dhaka, Bangladesh
        </div>
        <div>
          <span className="title">Academic Status:</span> 7th Semester, Fourth Year
        </div>
        <div className="connect">
          <IonIcon icon={logoGithub} className="icons" onClick={()=>window.location.href="https://github.com/mirzaazwad"}></IonIcon>
          <IonIcon icon={logoLinkedin} className="icons" onClick={()=>window.location.href="https://bd.linkedin.com/in/mirza-mohammad-azwad-b5239b1a4"}></IonIcon>
        </div>
      </Card.Body>
    </Card>

    </div>
  </div>  
  );
}
 
export default AboutUs;