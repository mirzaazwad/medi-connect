import { Modal } from "react-bootstrap";
import { useState } from "react";
import ErrorModal from "../../../partials/errorModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import Loader from "../../../partials/loader";
import ModalProps from "../../../assets/ts/modal";
import medicineInventory from "../../../assets/ts/medicine-inventory";
import "../assets/css/medicine-details.css";
import MedicineDetailsTr from "./medicine-details.tr";
import { useOrdering } from "../hooks/useOdering";

interface MedicineDetailsProps extends ModalProps {
  medicine: medicineInventory;
}

const MedicineDetails = ({ show, setShow, medicine }: MedicineDetailsProps) => {
  const {
    medicineName,
    genericName,
    prescription,
    description,
    medicineImage,
    setImage,
    manufacturer,
    medicineType,
    medicineCategory,
    stockControl,
    isLoading,
    isDisabled,
    error,
    setError,
  } = useOrdering(medicine);
  const handleAddToCart=()=>{

  }
  const [imageFilename,setImageFilename]=useState<File>();

  const handlePcs = () => {};

  const handleStrips = () => {};

  const handleBoxes = () => {};

  if (!isLoading) {
    return (
      <Modal
        className="mb-4 mx-auto w-100 modal-details"
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header className="table-header" closeButton>
          {medicineName}
        </Modal.Header>
        <Modal.Body
          className="modal-body-details"
        >
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 d-flex w-50">
              <div className="ms-2">
                <img
                  src={medicineImage}
                  width="100%"
                  className="image-details"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="mb-2 text-muted">
                <ErrorModal error={error} setError={setError} />
                <p>Generic Name: {genericName}</p>
                <hr />
                <p>Type: {medicineType?.Name} </p>
                <hr />
                <p>
                  Category: {medicineCategory?.category}{" "}
                </p>
                <hr />
              </div>
              <p className="modal-fields">
                Manufacturer: {manufacturer}
              </p>
              <hr />
              <p className="price">
                Price: ৳
                {stockControl.calculateTotalPrice(
                  medicineType?.hasStrips || false
                )}
              </p>
              <hr />
              <p>Stock:</p>
              <div>
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <table className="medicine-details">
                      <MedicineDetailsTr handlerFunction={handlePcs} type="Pieces" currentQuantity={stockControl.quantityPcs} setCurrentQuantity={stockControl.setQuantityPcs} thresholdQuantity={stockControl.currentPcs}/>
                      {stockControl.currentStrips && (<MedicineDetailsTr type="Strips" handlerFunction={handleStrips} currentQuantity={stockControl.quantityStrips} setCurrentQuantity={stockControl.setQuantityStrips} thresholdQuantity={stockControl.currentStrips}/>)}
                      <MedicineDetailsTr handlerFunction={handleBoxes} type="Boxes" currentQuantity={stockControl.quantityBoxes} setCurrentQuantity={stockControl.setQuantityBoxes} thresholdQuantity={stockControl.currentBoxes}/>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mb-2 text-muted mt-2">
                <h1 className="modal-fields">Description:</h1>
                <hr />
                <p> {description}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="w-100">
          <button
            className="custom-button full-width"
            disabled={isDisabled}
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>Add to cart
          </button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return <Loader />;
  }
};

export default MedicineDetails;
