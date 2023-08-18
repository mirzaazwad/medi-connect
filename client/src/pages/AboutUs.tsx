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
          This project is a part of the Software Project Lab-II SWE 4404 which takes place in the 4<sup>th</sup> Semester of Islamic University of Technology, Board Bazar, Dhaka, Bangladesh. In this project, the following technologies were used:
          <div>
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react"/>
          <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="redux"/>
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
          <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap"/>
          <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="material-ui"/>
          <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="express"/>
          <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="node"/>
          <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb"/>
          <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="google-cloud"/>
          <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="netlify"/>
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
          <span className="title">Academic Status:</span> 4th Semester
        </div>
        <div className="connect">
          <IonIcon icon={logoGithub} className="icons" onClick={()=>window.location.href="https://github.com/mirzaazwad"}></IonIcon>
          <IonIcon icon={logoLinkedin} className="icons" onClick={()=>window.location.href="https://bd.linkedin.com/in/mirza-mohammad-azwad-b5239b1a4"}></IonIcon>
        </div>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className="header">Zaara Zabeen Arpa</Card.Header>
      <Card.Body>
        <div>
        <span className="title">Institute:</span> Islamic University of Technology(IUT), Board Bazar, Gazipur, Dhaka, Bangladesh
        </div>
        <div>
        <span className="title">Academic Status:</span> 4th Semester
        </div>
        <div className="connect">
          <IonIcon icon={logoGithub} className="icons"  onClick={()=>window.location.href="https://github.com/zaarpa"}></IonIcon>
          <IonIcon icon={logoLinkedin} className="icons" onClick={()=>window.location.href="https://bd.linkedin.com/in/zaara-zabeen-arpa-42566621a"}></IonIcon>
        </div>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className="header">Sadnam Sakib Apurbo</Card.Header>
      <Card.Body>
      <div>
      <span className="title">Institute:</span> Islamic University of Technology(IUT), Board Bazar, Gazipur, Dhaka, Bangladesh
        </div>
        <div>
        <span className="title">Academic Status:</span> 4th Semester
        </div>
        <div className="connect">
          <IonIcon icon={logoGithub} className="icons"  onClick={()=>window.location.href="https://github.com/sadnamSakib"}></IonIcon>
          <IonIcon icon={logoLinkedin} className="icons"  onClick={()=>window.location.href="https://bd.linkedin.com/in/sadnam-sakib-apurbo-0a4613211"}></IonIcon>
        </div>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header className="header">Zannatun Naim Sristy<sup>SUPERVISOR</sup></Card.Header>
      <Card.Body>
      <div>
      <span className="title">Institute:</span> Islamic University of Technology(IUT), Board Bazar, Gazipur, Dhaka, Bangladesh
        </div>
        <div>
        <span className="title">Academic Status:</span> Lecturer, CSE
        </div>
        <div className="connect">
          <IonIcon icon={logoLinkedin} className="icons" onClick={()=>window.location.href="https://bd.linkedin.com/in/zannatun-sristy-858a24190"}></IonIcon>
        </div>
      </Card.Body>
    </Card>

    </div>
  </div>  
  );
}
 
export default AboutUs;