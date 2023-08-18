import { Modal } from "react-bootstrap";
import ModalProps from "../../../assets/ts/modal";
import medicineInventory from "../../../assets/ts/medicine-inventory";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StockManagementAdd from "./stock-control-add";
import StockManagementSub from "./stock-control-sub";
import {useState} from 'react';

interface MedicineInventoryDetailsProps extends ModalProps {
  index: number;
  medicines: medicineInventory[];
  setMedicines:React.Dispatch<React.SetStateAction<medicineInventory[]>>;
  setError:React.Dispatch<React.SetStateAction<string>>;
}

const MedicineInventoryDetails = ({
  index,
  medicines,
  setMedicines,
  show,
  setShow,
  setError,
}: MedicineInventoryDetailsProps) => {
  const [showAddStock,setShowAddStock]=useState(false);
  const [showSubStock,setShowSubStock]=useState(false);
  return (
    <div className="medicine-details">
      <StockManagementAdd show={showAddStock} setShow={setShowAddStock} medicines={medicines} setMedicines={setMedicines} index={index} setError={setError}/>
      <StockManagementSub show={showSubStock} setShow={setShowSubStock} medicines={medicines} setMedicines={setMedicines} index={index} setError={setError}/>
      <Modal show={show} onHide={() => setShow(false)} className="modal-details-container">
      <Modal.Header closeButton className="table-header">Inventory Medicine Details</Modal.Header>
      <Modal.Body>
        <div className="modal-content-details w-100">
        <div className="details-2">
              <img src={medicines[index]?.imageURL} className="details-image" alt="medicine-image"/>
            </div>
          <div className="w-100 d-flex">
            <div className="details-1">
            <div className="inventory-modal-text">
              <span className="title-inventory-modal">Medicine Name:</span>{medicines[index]?.medicineName}
            </div>
            <div className="inventory-modal-text">
              <span  className="title-inventory-modal">Generic Name: </span>{medicines[index]?.genericName}
            </div>
            <div className="inventory-modal-text">
            <span className="title-inventory-modal">Manufacturer: </span>{medicines[index]?.manufacturer}
            </div>
            <div className="inventory-modal-text">
            <span className="title-inventory-modal">Type: </span>{medicines[index]?.Type.Name}
            </div>
            <div className="inventory-modal-text">
            <span className="title-inventory-modal">Category: </span>{medicines[index]?.Category.category}
            </div>
            <div className="inventory-modal-text">
            <span className="title-inventory-modal">Selling Price: </span>{medicines[index]?.sellingPrice}৳
            </div>
            <div className="inventory-modal-text">
            <span className="title-inventory-modal">Purchase Price: </span>{medicines[index]?.purchasePrice}৳
            </div>
            <div className="inventory-modal-text">
            <span className="title-inventory-modal">Stock: </span>
            <div className="inventory-modal-text">
            <ul>
            <li><span className="title-inventory-modal">Pcs: </span>{medicines[index]?.amount.pcs}</li>
            <li><span className="title-inventory-modal">Strips: </span>{medicines[index]?.amount.strips}</li>
            <li><span className="title-inventory-modal">Boxes: </span>{medicines[index]?.amount.boxes}</li>
            </ul>
            </div>
            </div>
            </div>
          </div>
            
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex w-100">
          <div className="w-50">
          <button className="custom-button full-width" onClick={()=>{
            setShowAddStock(true);
            setShow(false);
          }}>Add Stock <IonIcon icon={addCircleOutline}></IonIcon></button>
          </div>
          <div className="w-50">
          <button className="custom-button full-width" onClick={()=>{
            setShowSubStock(true);
            setShow(false);
          }}>Reduce Stock <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon></button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default MedicineInventoryDetails;
