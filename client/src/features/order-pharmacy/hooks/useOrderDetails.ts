import { orderMedicine } from "../../../assets/ts/order-medicine";
import { handleStatusColor } from "../../../utils/HandleStatusColorCustomer";
import {useState,useEffect,useMemo} from 'react';

export const useOrderDetails=(orderStatus:string,payment_status:boolean,medicines:orderMedicine[]|undefined)=>{
  const [status,setStatus] = useState(orderStatus);
  const [totalPrice, setTotalPrice] = useState(0);
  const [statusColor, setStatusColor] = useState('warning');
  const [progress,setProgress]=useState(0);

  const handleProgress=()=>{
    switch(orderStatus){
      case 'Pending':
        setProgress(0);
        break;
      case 'Approved':
        setProgress(10);
        break;
      case 'In progress':
        setProgress(30);
        break;
      case 'Delivering':
        setProgress(60);
        break;
      case 'Delivered':
        setProgress(100);
        break;
      case 'Cancelled':
        setProgress(0);
        break;
      default:
        setProgress(0);
    }
  }

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
    handleProgress();
  }, [orderStatus]);
  return {progress,status,totalPrice,statusColor};
}