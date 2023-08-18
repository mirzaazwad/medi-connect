import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { IonIcon } from "@ionic/react";
import {
  mailOutline,
  lockClosedOutline,
  personCircleOutline,
  logoGoogle,
  lockOpenOutline,
} from "ionicons/icons";
import DOMPurify from "dompurify";
import { useSignUp } from "../hooks/useSignUp";
import "../assets/css/signup.css";

interface SignUpProps {
  changeState: React.Dispatch<React.SetStateAction<string>>;
}

const SignUp = ({ changeState }: SignUpProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const {
    error,
    userType,
    setUserType,
    username,
    setUsername,
    email,
    setEmail,
    password,
    changePassword,
    confirmPassword,
    changeConfirmPassword,
    errorPassword,
    errorConfirmPassword,
    signup,
  } = useSignUp();
  const [passwordVisibility, setPasswordVisibility] = useState<string>(
    "password"
  );
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState<
    string
  >("password");

  const handleSubmit = () => {};

  return (
    <Card className="signup">
      <Card.Body>
        <h4>Sign Up</h4>
        <Form onSubmit={handleSubmit}>
          <div className="errorBox">{error}</div>
          <div className="radio-button-group">
            <button
              className={`radio-button ${
                userType === "Administrator" ? "radio-button" : "radio-button-outline"
              }`}
              onClick={() => setUserType("Administrator")}
            >
              Administrator
            </button>
            <button
              className={`radio-button ${
                userType === "Patient"
                  ? "radio-button"
                  : "radio-button-outline"
              }`}
              onClick={() => setUserType("Patient")}
            >
              Patient
            </button>
            <button
              className={`radio-button ${
                userType === "Doctor"
                  ? "radio-button"
                  : "radio-button-outline"
              }`}
              onClick={() => setUserType("Doctor")}
            >
              Doctor
            </button>
          </div>

          <div className="inputbox">
            <IonIcon icon={personCircleOutline}></IonIcon>
            <input
              type="text"
              required
              id="name"
              name="name"
              value={username}
              onChange={(e) => setUsername(DOMPurify.sanitize(e.target.value))}
            />
            <label htmlFor="">Name</label>
          </div>
          <div className="inputbox">
            <IonIcon icon={mailOutline}></IonIcon>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(DOMPurify.sanitize(e.target.value))}
            />
            <label htmlFor="">Email</label>
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
            <input
              type={passwordVisibility}
              onChange={(e) =>
                changePassword(DOMPurify.sanitize(e.target.value))
              }
              id="password"
              name="password"
              required
              value={password}
            />
            <label htmlFor="">Password</label>
          </div>
          <div id="errorPassword" className="errorBox">
            {errorPassword}
          </div>
          <div className="inputbox">
            {(confirmPasswordVisibility === "password" && (
              <IonIcon
                icon={lockClosedOutline}
                onClick={() => setConfirmPasswordVisibility("text")}
              ></IonIcon>
            )) ||
              (confirmPasswordVisibility === "text" && (
                <IonIcon
                  icon={lockOpenOutline}
                  onClick={() => setConfirmPasswordVisibility("password")}
                ></IonIcon>
              ))}
            <input
              type={confirmPasswordVisibility}
              onChange={(e) =>
                changeConfirmPassword(DOMPurify.sanitize(e.target.value))
              }
              required
              value={confirmPassword}
              id="confirmPassword"
              name="confirmPassword"
            />
            <label htmlFor="">Re-enter password</label>
          </div>
          <div className="terms_and_conditions">
            <label htmlFor="remember_me">
              <input type="checkbox" id="remember_me" required />
              Agree to all the <a href="/terms">terms and conditions</a>
            </label>
          </div>
          <div id="errorConfirmPassword" className="errorBox">
            {errorConfirmPassword}
          </div>
          <button
            type="submit"
            className="custom-button"
            name="submit"
            value="submit"
            disabled={
              loading || errorConfirmPassword !== "" || errorPassword !== ""
            }
            id="buttonRegister"
          >
            Register
          </button>
        </Form>
        <hr />
        <button name="google" className="custom-button full-width">
          Continue with <IonIcon icon={logoGoogle}></IonIcon>
        </button>
        <div className="login-link">
          <p>
            Already have an account?{" "}
            <a onClick={() => changeState("Login")} className="link-to-login">Login</a>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SignUp;
