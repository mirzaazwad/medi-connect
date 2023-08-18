import medicineInventory from "../../../assets/ts/medicine-inventory";
import {useState} from 'react';

export const useAddStock=(medicines:medicineInventory[],setMedicines:React.Dispatch<React.SetStateAction<medicineInventory[]>>)=>{
  const [stockType,setStockType]=useState<string>();
  const [amount,setAmount]=useState<number>();

  const addToStock = async(e:React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
  };

  return {setStockType,amount,setAmount,addToStock};
}