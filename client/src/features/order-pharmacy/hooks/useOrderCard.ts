import { useEffect, useState,useMemo } from "react";
import { orderMedicine } from "../../../assets/ts/order-medicine";
import { handleStatusColor } from "../../../utils/HandleStatusColorCustomer";

export const useOrderCard=(orderStatus:string,payment_status:boolean,medicines:orderMedicine[]|undefined)=>{
  const [status,setStatus] = useState(orderStatus);
  const [totalPrice, setTotalPrice] = useState(0);
  const [statusColor, setStatusColor] = useState('warning');
  

  const calculatePrice=()=>{
    let price = 0;
    if(medicines){
      medicines.forEach(item => {
        price += item.price;
      });
    }
    setTotalPrice(price);
  }

  const result=useMemo(()=>calculatePrice(),[medicines]);

  useEffect(() => {
    handleStatusColor(orderStatus,setStatusColor,setStatus);
  }, [orderStatus]);
  return {status,totalPrice,statusColor};
}