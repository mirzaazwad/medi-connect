import { IonIcon } from "@ionic/react";
import { lockClosedOutline, lockOpenOutline, personCircleOutline } from "ionicons/icons";
import { Card, Form } from "react-bootstrap";
import { useAdminLogin } from "../hooks/useAdminLogin";
import { useState } from "react";
import "../assets/css/admin.css";

const AdminLogin = () => {
    const {error,id,setID,password,changePassword,login}=useAdminLogin();
    const [passwordVisibility,setPasswordVisibility]=useState("password");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login();
  };

  return (
    <Card className="admin-signup">
      <div className="admin-signup">
      <Card.Header>
        <h2>Admin Login</h2>
      </Card.Header>
      <Card.Body>
        <div className="hospital-signup-container">
          <div className="hospital-signup-content">
          <Form className="form-value" onSubmit={handleSubmit}>
            <div id="confirmErrorPassword" className="errorBox">
              {error}
            </div>
            <div className="inputbox">
              <IonIcon icon={personCircleOutline} />
              <input type="text" required id="id" name="id" value={id} onChange={(e)=>setID(e.target.value)}/>
              <label htmlFor="id">Admin ID</label>
            </div>
            <div className="inputbox">
              {(passwordVisibility === "password" && (
              <IonIcon
                icon={lockClosedOutline}
                onClick={() => setPasswordVisibility("text")}
              ></IonIcon>
            )) ||
              (passwordVisibility === "text" && (
                <IonIcon
                  icon={lockOpenOutline}
                  onClick={() => setPasswordVisibility("password")}
                ></IonIcon>
              ))}
              <input type={passwordVisibility} id="password" name="password" required value={password} onChange={(e)=>changePassword(e.target.value)} />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit" name="submit" id="submit" className="custom-button">
              LOGIN
            </button>
          </Form>
          </div>
        </div>
      </Card.Body>
      </div>
    </Card>
  );
};

export default AdminLogin;
