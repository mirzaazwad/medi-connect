import { useState } from "react"

export const useStockControl=(currentPcs:number,currentStrips:number|undefined,currentBoxes:number)=>{
  const [quantityPcs, setQuantityPcs]=useState<number>(0);
  const [quantityStrips, setQuantityStrips]=useState<number>(0);
  const [quantityBoxes, setQuantityBoxes]=useState<number>(0);
  const [pcsPerStrip,setPcsPerStrip]=useState<number>();
  const [pcsPerBox,setPcsPerBox]=useState<number>();
  const [stripsPerBox,setStripsPerBox]=useState<number>();
  const [sellingPrice,setsellingPrice]=useState<number>();

  const calculateTotalPrice=(hasStrips:boolean)=>{
    if(hasStrips){
      return 0;
    }
    else{
      return 0;
    }
  }

  return {quantityPcs,setQuantityPcs,quantityBoxes,setQuantityBoxes,quantityStrips,setQuantityStrips,currentPcs,currentStrips,currentBoxes,pcsPerStrip,setPcsPerStrip,pcsPerBox,setPcsPerBox,stripsPerBox,setStripsPerBox,sellingPrice,setsellingPrice,calculateTotalPrice};



}