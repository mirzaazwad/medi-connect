import { useState } from "react";
import AddCategory from "./addCategory";
import Loader from "../../../partials/loader";
import medicine from "../../../assets/ts/medicine";
import { Modal } from "react-bootstrap";
import AddType from "./addType";
import Type from "../../../assets/ts/medicine-type";
import Category from "../../../assets/ts/medicine-category";
import ModalProps from "../../../assets/ts/modal";
import StripsForm from "./stripsForm";
import NonStripsForm from "./nonStripsForm";

const AddMedicine = ({show,setShow}:ModalProps) => {
  const types:Type[]=[
    {
      Name:"Tablet",
      Description:"Edible Medication",
      _id:"1234",
      hasStrips:true
    },
    {
      Name:"Syrup",
      Description:"Edible Medication",
      _id:"1234",
      hasStrips:false
    },
    {
      Name:"Baal Saal",
      Description:"Edible Medication",
      _id:"1234",
      hasStrips:true
    }
  ];

  const categories:Category[]=[
    {
      category:"Anti-Pyretic",
      description:"Helps with fevers",
      _id:"123"
    },
    {
      category:"Anti-Baal",
      description:"Helps with fevers",
      _id:"123"
    },
    {
      category:"Anti-Saal",
      description:"Helps with fevers",
      _id:"123"
    },
  ];
  const [inventory,setInventory]=useState(null);
  const [medicines,setMedicines]=useState<medicine[]>([]);
  const [error, setError] = useState("");
  const [Strips, setHasStrips] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showType, setShowType] = useState(false);
  const [medicineType, setMedicineType] = useState(null);
  const [currentValue,setCurrentValue]=useState({medicineName:"",genericName:"",description:"",stripsPerBox:"",
      sellingPrice:"",pcsPerStrip:"",manufacturer:"",purchasePrice:"",medicineCategory:"",pcsPerBox:"",imageURL:"",prescription:false
  });

  // const handleError=(data)=>{
  //   setError(data);
  // }

  // const handleCurrentValue=(data)=>{
  //   setCurrentValue(data);
  // }

  // const handleMedicineType = (e) => {
  //   setMedicineType(e);
  //   setHasStrips(false);
  //   medicines.types.forEach((elem) => {
  //     if (elem.hasStrips && elem._id === e._id) {
  //       setHasStrips(true);
  //     }
  //   });
  // };

  if (true) {
    return (
          <div className="add-medicine">
            <Modal className="addMedicineCard" show={show} onHide={()=>setShow(false)}>        
            <Modal.Header className="table-header" closeButton>
            Add New Brand
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex w-100">
              New Medicine Information:
              <div className="d-flex w-75">
              <div className="w-50">
              <button
                className="custom-button full-width float-end"
                onClick={() => {
                  setShow(false);
                  setShowCategory(true);
                }}
              >
                Add Category
              </button>
              </div>
              <div className="w-50">
              <button
                className="custom-button full-width float-end"
                onClick={() => {
                  setShow(false);
                  setShowType(true);
                }}
              >
                Add Type
              </button>
              </div>
              </div>
              </div>
              <div className="errorMessage" style={{ color: "red" }}>
                {error}
              </div>
              {Strips && (<StripsForm/>)}
              {!Strips && (<NonStripsForm/>)}
            </Modal.Body>
          </Modal>
          <AddCategory show={showCategory} setShow={setShowCategory} setShowMedicine={setShow} categories={categories}/>
          <AddType show={showType} setShow={setShowType} setShowMedicine={setShow} types={types}/>
          </div>
    );
  } else {
    return (
          <Modal className="addMedicineCard">
            <Modal.Header closeButton className="table-header">
            Add Medicine
            </Modal.Header>
            <Modal.Body>
            <Loader/>
            </Modal.Body>
          </Modal>
    );
  }
};

export default AddMedicine;
