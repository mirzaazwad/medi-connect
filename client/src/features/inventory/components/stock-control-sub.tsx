import { Button, Form, Modal } from "react-bootstrap";
import { useAddStock } from "../hooks/useAddStock";
import medicineInventory from "../../../assets/ts/medicine-inventory";
import { useSubStock } from "../hooks/useSubStock";

interface StockManagementProps{
  show:boolean;
  setShow:React.Dispatch<React.SetStateAction<boolean>>;
  medicines:medicineInventory[];
  setMedicines:React.Dispatch<React.SetStateAction<medicineInventory[]>>;
  setError:React.Dispatch<React.SetStateAction<string>>;
  index:number;
}

const StockManagementSub = ({show,setShow,medicines,setMedicines,index,setError}:StockManagementProps) => {
  const {setStockType,amount,setAmount,subToStock}=useSubStock(medicines,setMedicines);
  return ( 
  <Modal show={show} onHide={()=>setShow(false)}>
    <form onSubmit={subToStock}>
    <Modal.Header closeButton className="table-header">
    Add to stock
    </Modal.Header>
    <Modal.Body>
        <Form.Label>Quantity Type:</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) =>
            setStockType(e.target.value)
          }
        >
          <option>Select quantity type</option>
          <option value="Pcs">Pcs</option>
          {medicines[index]?.Type.hasStrips===true && (<option value="Strips">Strips</option>)}
          <option value="Boxes">Boxes</option>
        </Form.Select>
        <div className="inputbox">
        <input
          type="number"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          id="amount"
          value={amount}
          onChange={(e)=>setAmount(Number(e.target.value))}
          required
        />
        <label htmlFor="amount">Quantity:</label>
        </div>
    </Modal.Body>
    <Modal.Footer className="w-100">
      <div className="d-flex">
      <div className="w-50">
      <button className="custom-button full-width" onClick={()=>setShow(false)}>
        Close
      </button>
      </div>
      <div className="w-60">
      <button className="custom-button full-width">
        Update
      </button>
      </div>
      </div>
    </Modal.Footer>
    </form>
  </Modal> 
  );
}
 
export default StockManagementSub;