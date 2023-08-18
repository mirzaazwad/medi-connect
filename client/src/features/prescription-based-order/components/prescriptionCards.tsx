import { Card } from "react-bootstrap";
import ViewPrescription from "./viewPrescription";
import {useState} from 'react';
import OrderByPrescription from "../../pharmacy/pages/orderByPrescription";

interface PrescriptionProps{
  prescriptionName:string;
  uploadDate:Date;
  imageURL:string;
}

const PrescriptionCard = ({prescriptionName,uploadDate,imageURL}:PrescriptionProps) => {
  const[showPrescription,setShowPrescription]=useState<boolean>(false);
  return ( 
  <div className="prescription-card">
  <ViewPrescription show={showPrescription} setShow={setShowPrescription} prescriptionName={prescriptionName} uploadDate={uploadDate} imageURL={imageURL}/>
    <Card className="w-75 d-flex mx-auto card-prescription">
  <Card.Header className="prescription-view-header">Prescription Name: {prescriptionName}</Card.Header>
  <Card.Body className="d-flex">
  <div className="title w-75">
    Uploaded On: {uploadDate.toLocaleDateString()}
  </div>
  <div className="w-25">
    <img src={imageURL} className="prescription-tile"/>
  </div>
  </Card.Body>
  <Card.Footer>
    <div className="view-prescription-footer float-end d-flex">
      <div className="w-50">
      <button className="custom-button full-width" onClick={()=>setShowPrescription(true)}>View <span>Prescription</span></button>
      </div>
      <div className="w-50">
      <button className="custom-button full-width"><span>Request</span> Order</button>
      </div>
    </div>
  </Card.Footer>
</Card> 
  </div>
);
}
 
export default PrescriptionCard;