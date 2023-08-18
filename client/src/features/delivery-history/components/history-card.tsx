import { Badge, Card } from "react-bootstrap";

type HistoryCardProps={
  history:{
      _id: string;
      from: string;
      to: string;
      source: string;
      status:string;
      sink: string;
    }
}

const HistoryCard = ({history}:HistoryCardProps) => {
  return (
    <Card className="delivery-request">
      <Card.Header className="card-header-history">
        <h4>Order ID: {history._id}</h4>
        <div className="from">
        From: {history.from}
        </div>
        <div className="to">
        To: {history.to}
        </div>
      </Card.Header>
      <Card.Body>
        <div className="starting-location">
        Receiving Location: {history.source}
        </div>
        <div className="ending-location">
        Destination: {history.sink}
        </div>
      </Card.Body>
      <Card.Footer>
        Status: <Badge bg={history.status==="Delivered"?"primary":"success"}>{history.status}</Badge>
      </Card.Footer>
    </Card>
   );
}
 
export default HistoryCard;