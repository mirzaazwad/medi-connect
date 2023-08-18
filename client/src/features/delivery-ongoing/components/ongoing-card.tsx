import { IonIcon } from "@ionic/react";
import { chatbubbleEllipsesOutline } from "ionicons/icons";
import { Card } from "react-bootstrap";

type OngoingCardProps={
  ongoing:{
      _id: string;
      from: string;
      to: string;
      source: string;
      sourceLocation: {
          lat: number;
          lng: number;
      };
      sinkLocation: {
        lat: number;
        lng: number;
      };
      sink: string;
    }
}

const OngoingCard = ({ongoing}:OngoingCardProps) => {
  return (
    <Card className="delivery-request">
      <Card.Header className="ongoing-header">
        <h2>Order ID: {ongoing._id}</h2>
        <div className="from">
        From: {ongoing.from}
        </div>
        <div className="to">
        To: {ongoing.to}
        </div>
      </Card.Header>
      <Card.Body>
        <div className="starting-location">
        Receiving Location: {ongoing.source}
        </div>
        <div className="ending-location">
        Destination: {ongoing.sink}
        </div>
        <div className="w-100 d-flex">
          <div className="w-50">
            <button className="custom-button full-width"><IonIcon icon={chatbubbleEllipsesOutline}></IonIcon> With Customer</button>
          </div>
          <div className="w-50">
            <button className="custom-button full-width"><IonIcon icon={chatbubbleEllipsesOutline}></IonIcon> With Pharmacy</button>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="w-100 mx-auto d-flex">
        <div className="button-width">
        <button className="custom-button full-width"><span className="route">Success</span><span className="done">Done</span></button>
        </div>
        <div className="button-width">
        <button className="custom-button full-width">Fail</button>
        </div>
        <div className="button-width">
        <button className="custom-button full-width"><span className="route">Current</span> Route</button>
        </div>
        </div>
      </Card.Footer>
    </Card>
   );
}
 
export default OngoingCard;