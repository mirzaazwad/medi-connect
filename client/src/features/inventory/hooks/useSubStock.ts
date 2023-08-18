import medicineInventory from "../../../assets/ts/medicine-inventory";
import {useState} from 'react';

export const useSubStock=(medicines:medicineInventory[],setMedicines:React.Dispatch<React.SetStateAction<medicineInventory[]>>)=>{
  const [stockType,setStockType]=useState<string>();
  const [amount,setAmount]=useState<number>();

  const subToStock = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return {setStockType,amount,setAmount,subToStock};
}