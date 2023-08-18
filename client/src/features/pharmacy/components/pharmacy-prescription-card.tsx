import { Card } from 'react-bootstrap';
import PharmacyArrayComponent from '../assets/ts/pharmacy-array';
const PharmacyPrescriptionCard = ({_id,image,name,address}:PharmacyArrayComponent) => {

  return (
    <Card
      className="pharmacy-prescription-card"
    >
      <Card.Img variant="top" src={image} className="pharmacy-card-image" />
      <Card.Body className='pharmacy-card-text'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{address}</Card.Text>
      </Card.Body>
      <Card.Footer className='w-100 mx-auto prescription-card-footer'>
        <button className='custom-button full-width'>Request</button>
      </Card.Footer>
    </Card>
  );
};

export default PharmacyPrescriptionCard;
