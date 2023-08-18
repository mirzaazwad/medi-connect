import DOMPurify from "dompurify";
import {  Form } from "react-bootstrap";
import { CFormSwitch } from "@coreui/react";
import Type from "../../../assets/ts/medicine-type";
import Category from "../../../assets/ts/medicine-category";
import { useNonStripsAddBrand } from "../hooks/useNonStripsAddBrand";

const NonStripsForm = () => {
  const {medicine,nonStripInformation,utilities}=useNonStripsAddBrand();
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

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="addMedicineSide d-flex">
          <div className="select-left">
          <label htmlFor="medicine-type" className="label">Type</label>
            <Form.Select
              aria-label="Select an option"
              placeholder="Select an option"
              value={medicine.medicineType===undefined?"default":medicine.medicineType._id}
              onChange={(e) => {
                medicine.setMedicineType(types.find(element => element._id === e.target.value));
              }}
              id="medicine-type"
            >
              <option value="default" key="default">Select an option</option>
              {types && types.length !== 0 &&
                types.map((medicines) => (
                  <option value={medicines._id} key={medicines._id}>{medicines.Name}</option>
                ))}
            </Form.Select>
          </div>
          <div className="select-right">
          <label id="category" className="label">Category</label>
            <Form.Select
              aria-label="Select an option"
              placeholder="Select an option"
              value={medicine.medicineCategory===undefined?"default":medicine.medicineCategory._id}
              onChange={(e) => medicine.setMedicineCategory(categories.find(element => element._id === e.target.value))}
              id="category"
            >
              <option value="default" key="default">Select an option</option>
              {categories && categories.length !== 0 &&
                categories.map((category) => (
                  <option value={category._id} key={category._id}>{category.category}</option>
                ))}
            </Form.Select>
            
          </div>
      </div>
      <div className="d-flex">
        <div className="inputbox">
            <input
              type="text"
              aria-describedby="inputGroup-sizing-default"
              value={medicine.medicineName}
              onChange={(e) =>
                medicine.setMedicineName(DOMPurify.sanitize(e.target.value))
              }
              required
            />
            <label>Medicine Name</label>
        </div>
        <div className="inputbox">
            <input
              type="text"
              value={medicine.genericName}
              onChange={(e) =>
                medicine.setGenericName(DOMPurify.sanitize(e.target.value))
              }
              required
            />
            <label>Generic Name</label>
        </div>
      </div>
        <div className="inputbox">
        <input
              value={medicine.manufacturer}
              onChange={(e) =>
                medicine.setManufacturer(DOMPurify.sanitize(e.target.value))
              }
              required
            />
            <label>Manufacturer</label>
        </div>
      <div className="d-flex">
        <div className="inputbox">
        <input
              type="number"
              value={medicine.purchasePrice}
              onChange={(e) =>
                e.target.value!==""?medicine.setPurchasePrice(Number(DOMPurify.sanitize(e.target.value))):
                medicine.setPurchasePrice(undefined)
              }
              required
            />
            <label>Purchase Price</label>
        </div>
        <div className="inputbox">
        <input
              type="number"
              value={medicine.sellingPrice}
              onChange={(e) =>
                e.target.value!==""?medicine.setSellingPrice(Number(DOMPurify.sanitize(e.target.value))):
                medicine.setSellingPrice(undefined)
              }
              required
            />
            <label>Selling Price</label>
        </div>
      </div>
      <div className="inputbox">
      <input
          type="number"
          value={nonStripInformation.pcsPerBox}
          onChange={(e) =>
            e.target.value!==""?nonStripInformation.setPcsPerBox(Number(DOMPurify.sanitize(e.target.value))):
            nonStripInformation.setPcsPerBox(undefined)
          }
          required
        />
        <label>Pieces Per Box</label>
      </div>
      <div className="inputbox">
      <input
          type="text"
          value={medicine.description}
          onChange={(e) => medicine.setDescription(DOMPurify.sanitize(e.target.value))}
          required
        />
        <label>Medicine Description</label>
      </div>
      <p className="label">Upload Medicine Image</p>
      <div className="inputbox">
          <input type="file" name="file"
                      accept="image/*"
                      id="imageFileProfile"  className="form-control" onChange={(e) => {
                        if(e.target.files!==null){
                          medicine.setImage(e.target.files[0])
                        }
                        }}/>
        
        </div>
        <div className="switchbox">
        <CFormSwitch reverse size="xl" label="Prescription Required" onChange={()=>medicine.setPrescription(!medicine.prescription)}/>
        </div>
      <div className="d-flex justify-content-center w-100" style={{marginLeft:'12.5%'}}>
        <button
          className="custom-button full-width"
          type="submit"
          disabled={utilities.disabled}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default NonStripsForm;
