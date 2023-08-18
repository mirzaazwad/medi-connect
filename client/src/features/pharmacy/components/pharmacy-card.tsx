import { Card } from 'react-bootstrap';
import PharmacyDisplay from '../assets/ts/pharmacy';
const PharmacyCard = ({image,name,address}:PharmacyDisplay) => {

  return (
    <Card
      className="pharmacy-card"
    >
      <Card.Img variant="top" src={image} className="pharmacy-card-image" />
      <Card.Body className='pharmacy-card-text'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{address}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PharmacyCard;
