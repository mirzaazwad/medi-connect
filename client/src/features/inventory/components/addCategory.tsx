import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ModalProps from "../../../assets/ts/modal";
import Category from "../../../assets/ts/medicine-category";

interface AddCategoryProps extends ModalProps{
  categories:Category[];
  setShowMedicine:React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCategory = ({show,setShow,categories,setShowMedicine}:AddCategoryProps) => {
  const [categoryName,setCategoryName]=useState("");
  const [categoryDescription,setCategoryDescription]=useState("");

  const handleCategory = async(e:React.FormEvent<HTMLElement>) =>{
    e.preventDefault();

  }

  return (
    <form onSubmit={handleCategory}>
      <Modal show={show} onHide={()=>{
        setShow(false);
        setShowMedicine(true);
      }}>
        <Modal.Header closeButton className="table-header">
          <Modal.Title>Add Medicine Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inputbox">
          <input
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
          <label htmlFor="categoryName">Category Name:</label>
          </div>
          <div className="inputbox">
          <input
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            required
          />
          <label>Description:</label>
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

export default AddCategory;
