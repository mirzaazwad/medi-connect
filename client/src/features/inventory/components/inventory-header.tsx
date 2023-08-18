import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonIcon } from "@ionic/react";
import { searchCircleOutline } from "ionicons/icons";
import {Button} from 'react-bootstrap';

interface InventoryHeaderProps{
  error:string;
  setShowMedicine:React.Dispatch<React.SetStateAction<boolean>>;
  filterValue:string;
  handleFilterValueChange:(input: string) => void;
}

const InventoryHeader = ({error,setShowMedicine,filterValue,handleFilterValueChange}:InventoryHeaderProps) => {
  return (
    <div className="d-flex justify-content-between inventory-header">
      <div className="add-medicine-button">
        <Button
          className="add-medicine-btn"
          onClick={() => setShowMedicine(true)}
        >
          <span className="responsive-add">Add Medicine</span>{" "}
          <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        </Button>
      </div>
      <div className="errorMessage" style={{ color: "red" }}>
        {error}
      </div>
      <div className="d-flex searchbar justify-content-end align-items-center">
        <div className="inputbox">
          <IonIcon icon={searchCircleOutline}></IonIcon>
          <input
            className="w-100"
            type="text"
            placeholder={"Search For Medicines..."}
            value={filterValue}
            onChange={(e) => handleFilterValueChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryHeader;
