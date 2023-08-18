import { useEffect, useState } from "react";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Loader from "../../../partials/loader";
import medicineInventory from "../../../assets/ts/medicine-inventory";
import ModalProps from "../../../assets/ts/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AddMedicine from "./addMedicine";

const AddExistingMedicine = ({show,setShow}:ModalProps) => {
  const [showAddMedicine,setShowAddMedicine]=useState(false);
  const [medicines,setMedicines]=useState<medicineInventory[]>([{
    medicineName: "Medicine 1",
    genericName: "Generic 1",
    description: "Sample description 1",
    manufacturer: "Manufacturer 1",
    imageURL: "/medicine.avif",
    Category: {
      category: "Category 1",
      description: "Category description 1",
      _id: "1",
    },
    Type: {
      Name: "Type 1",
      _id: "1",
      Description: "Type description 1",
      hasStrips: true,
    },
    sellingPrice: 25.0,
    purchasePrice: 12.5,
    prescription: true,
    stripsPerBox: 5,
    pcsPerStrip: 10,
    amount:{
      pcs:12,
      strips:10,
      boxes:11,
    }
  },
  {
    medicineName: "Medicine 2",
    genericName: "Generic 2",
    description: "Sample description 2",
    manufacturer: "Manufacturer 2",
    imageURL: "/pharmacyProfilePicture.jpg",
    Category: {
      category: "Category 2",
      description: "Category description 2",
      _id: "2",
    },
    Type: {
      Name: "Type 2",
      _id: "2",
      Description: "Type description 2",
      hasStrips: true,
    },
    sellingPrice: 20.0,
    purchasePrice: 10.0,
    prescription: false,
    pcsPerBox: 30,
    amount:{
      pcs:12,
      boxes:11,
    }
  }]);
  const [medicine,setMedicine]=useState<string>("");


  const handleMedicines = async() => {

  };

  if(medicines){
    return (
      <div className="add-new-medicine">
        <AddMedicine show={showAddMedicine} setShow={setShowAddMedicine}/>
        <Form onSubmit={handleMedicines}>
        <Modal show={show} onHide={()=>setShow(false)}>
          <Modal.Header closeButton className="table-header">
            <Modal.Title>Add New Medicine</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="d-flex justify-content-between mb-2 w-100">
                <button className="custom-button add-new-medicine-button" onClick={()=>{
                  setShow(false);
                  setShowAddMedicine(true)
                }}>
                  Add New Brand <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                </button>
            </div>
            <div className="addMedicineSide d-flex justify-content-between">
              <div className="w-100 me-2">
                <InputGroup className="mb-1">
                  <InputGroup.Text
                    className="required-field"
                    id="inputGroup-sizing-default"
                  >
                    Select Medicine
                  </InputGroup.Text>
                  <Form.Select
                    aria-label="Select an option"
                    placeholder="Select an option"
                    onChange={(e) => setMedicine(e.target.value)}
                  >
                    <option value="default">Select an option</option>
                    {medicines.length !== 0 &&
                      medicines.map((medicine) => (
                        <option value={medicine.medicineName}>
                          {medicine.medicineName}
                        </option>
                      ))}
                  </Form.Select>
                </InputGroup>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="w-100">
            <div className="w-100 d-flex">
            <div className="w-50">
            <button className="custom-button full-width" onClick={()=>setShow(false)}>
              Close
            </button>
            </div>
            <div className="w-50">
            <button className="custom-button full-width" type="submit" onClick={handleMedicines}>
              Add
            </button>
            </div>
            </div>
          </Modal.Footer>
        </Modal>
      </Form>
      </div>
    );
  }
  else{
    return(
      <Loader/>
    )
  }
};

export default AddExistingMedicine;
