import {CaretDownFill } from "react-bootstrap-icons";
import medicineInventory from "../../../assets/ts/medicine-inventory";
import {useState} from 'react';

interface MedicineTableProps{
  medicines: medicineInventory[];
  setIndex:React.Dispatch<React.SetStateAction<number>>;
  setShowMedicineDetails:React.Dispatch<React.SetStateAction<boolean>>;

}

const MedicineTable = ({medicines,setIndex,setShowMedicineDetails}:MedicineTableProps) => {
  const [stockType,setStockType]=useState(0);
  return ( 
    <div className="d-flex justify-content-center">
              <table className="custom-table">
                <thead>
                  <tr><th className="table-header"> Medicine Name </th>
                    <th className="table-header"> Generic Name </th> <th className="table-header amount-clickable" onClick={()=>setStockType((stockType+1)%3)}>Stock {(stockType===0 && "(Pcs)")||(stockType===1 && "(Strips)")||(stockType===2 && "(Boxes)")} <CaretDownFill/> </th>
                  </tr>
                </thead>
                <tbody>
                  
                  {medicines.map((med,index) => (
                    <tr
                      key={med.medicineName}
                      className={`hover-row ${stockType===1 && med.Type.hasStrips===false?'d-none':''}`}
                      onClick={()=>{
                        setIndex(index);
                        setShowMedicineDetails(true);
                      }}
                    >
                      <td> {med.medicineName} </td>
                      <td> {med.genericName} </td>
                      <td>{(stockType===0 && med.amount.pcs)||(stockType===1 && med.amount.strips)||(stockType===2 && med.amount.boxes)} </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
   );
}
 
export default MedicineTable;