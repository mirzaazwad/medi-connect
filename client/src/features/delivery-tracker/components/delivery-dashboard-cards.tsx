import { Card } from "react-bootstrap";

type DeliveryCardProps={
    delivery:{
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

const DeliveryCard = ({delivery}:DeliveryCardProps) => {
  return ( 
    <Card className="delivery-request">
      <Card.Header className="delivery-header">
        <h2>Delivery Request</h2>
        <div className="order_id">
        Order ID: {delivery._id}
        </div>
        <div className="from">
        From: {delivery.from}
        </div>
        <div className="to">
        To: {delivery.to}
        </div>
      </Card.Header>
      <Card.Body>
        <div className="starting-location">
        Receiving Location: {delivery.source}
        </div>
        <div className="ending-location">
        Destination: {delivery.sink}
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="w-100 mx-auto d-flex">
        <div className="button-width">
        <button className="custom-button full-width">Accept</button>
        </div>
        <div className="button-width">
        <button className="custom-button full-width">Reject</button>
        </div>
        <div className="button-width">
        <button className="custom-button full-width"><span className="route">Show</span> Route</button>
        </div>
        </div>
      </Card.Footer>
    </Card>
   );
}
 
export default DeliveryCard;