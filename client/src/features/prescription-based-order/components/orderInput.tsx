import { Card } from "react-bootstrap";
import { Prescription } from "react-bootstrap-icons";

interface OrderFileInputProps{
  setImage:React.Dispatch<React.SetStateAction<File | undefined>>;
  handlePrescriptionSubmit:(e: React.FormEvent<HTMLFormElement>) => void;
}

const OrderFileInput = ({setImage,handlePrescriptionSubmit}:OrderFileInputProps) => {
  return ( <Card className="w-75 d-flex mx-auto card-prescription">
  <Card.Header className="prescription-header">Order By Prescription</Card.Header>
  <form onSubmit={handlePrescriptionSubmit}>
  <Card.Body>
  <div className="inputbox w-75">
    <Prescription className="custom-icon"/>
    <input type="text" id="prescription-name"/>
    <label htmlFor="prescription-name">Prescription Name</label>
  </div>
  <div className="input-group flex">
  <input
    type="file"
    name="file"
    accept="image/*"
    id="imageFileProfile"
    className="form-control"
    onChange={(e) => {
      if (e.target.files !== null) {
        setImage(e.target.files[0]);
      }
    }}
  />
</div>
  </Card.Body>
  <Card.Footer>
    <div className="prescription-input float-end">
      <button className="custom-button full-width">Confirm Order</button>
    </div>
  </Card.Footer>
  </form>
</Card> );
}
 
export default OrderFileInput;