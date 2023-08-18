import { Card } from "react-bootstrap";

interface OrderCardComponents {
  _id:string;
  prescriptionName:string;
  uploadDate:Date;
  image:string;
}

const PrescriptionCard = ({
  _id,
  prescriptionName,
  uploadDate,
  image
}: OrderCardComponents) => {
  return (
    <Card className="order-card">
      <Card.Header>
        <span className="title">Prescription ID: {_id} {prescriptionName}</span>
        <span className="generic-name">({uploadDate.toLocaleDateString()})</span>
      </Card.Header>
      <Card.Img src={image}>
      </Card.Img>
      <Card.Footer>
      <span className="generic-name">Upload Date: ({uploadDate.toLocaleDateString()})</span>
      </Card.Footer>
    </Card>
  );
};

export default PrescriptionCard;
