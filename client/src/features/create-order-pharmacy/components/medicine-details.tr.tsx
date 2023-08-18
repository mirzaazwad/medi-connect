import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";

interface MedicineDetailsTrProps{
  currentQuantity:number;
  thresholdQuantity:number;
  setCurrentQuantity:React.Dispatch<React.SetStateAction<number>>;
  handlerFunction:()=>void;
  type:string;
}

const MedicineDetailsTr = ({type,currentQuantity,thresholdQuantity,setCurrentQuantity,handlerFunction}:MedicineDetailsTrProps) => {
  return ( <tr>
    <td>
      <Form.Check
        type="radio"
        label={type}
        name="formHorizontalRadios"
        id="formHorizontalRadios1"
        onClick={handlerFunction}
      />
    </td>
    <td>
      <button
        className="sub h-100 me-2"
        onClick={() =>
          setCurrentQuantity(
            currentQuantity - 1
          )
        }
        disabled={currentQuantity === 0}
      >
        <FontAwesomeIcon
          icon={faMinus}
          style={{ border: "none" }}
        ></FontAwesomeIcon>
      </button>
    </td>
    <td>
      <p className="m-0 p-2">{currentQuantity}</p>
    </td>
    <td>
      <button
        className="add h-100 ms-2"
        onClick={() =>
          setCurrentQuantity(
            currentQuantity + 1
          )
        }
        disabled={
          currentQuantity ===
          thresholdQuantity
        }
      >
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </button>
    </td>
  </tr> 
  );
}
 
export default MedicineDetailsTr;