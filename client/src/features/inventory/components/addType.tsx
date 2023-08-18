// import { Switch } from "@mui/material";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
// import FormControlLabel from "@mui/material/FormControlLabel";
import ModalProps from "../../../assets/ts/modal";
import Type from "../../../assets/ts/medicine-type";
import { CFormSwitch } from "@coreui/react";

interface TypeProps extends ModalProps{
  types:Type[];
  setShowMedicine:React.Dispatch<React.SetStateAction<boolean>>;
}

const AddType = ({show,setShow,types,setShowMedicine}:TypeProps) => {
  const [typename,setTypeName]=useState("");
  const [typeDescription,setTypeDescription]=useState("");
  const [typeStrip,setTypeStrip]=useState(false);

  const handleType = async(e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

  }

  return (
    <form onSubmit={handleType}>
      <Modal show={show} onHide={()=>{
        setShow(false);
        setShowMedicine(true);
      }}>
        <Modal.Header closeButton className="table-header">
          <Modal.Title>Add Medicine Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inputbox">
          <input
            value={typename}
            onChange={(e) => setTypeName(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            required
          />
          <label>Type Name:</label>
          </div>
          
          <div className="inputbox">
          <input
            value={typeDescription}
            onChange={(e) => setTypeDescription(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            required
          />
          <label>Description:</label>
          </div>
          <div className="switchbox">
          <CFormSwitch reverse size="xl" label="Has Strips?" id="strips-switch" onChange={()=>setTypeStrip(!typeStrip)}/>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex">
          <div className="w-100 d-flex">
            <div className="w-50">
            <button type="button" className="custom-button full-width" onClick={()=>setShow(false)}>
            Close
          </button>
            </div>
            <div className="w-50">
            <button className="custom-button full-width" type="submit">
            Update
          </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default AddType;
