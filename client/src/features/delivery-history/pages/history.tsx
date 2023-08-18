import { useState } from "react";
import NavbarDelivery from "../../../partials/navbarDelivery";
import HistoryArray from "../components/history-array";
import '../assets/css/history.css';

const DeliveryHistory = () => {
  const [navigation,setNavigation]=useState(false);
  const viewDetails=()=>{

  }

  const [historyRequests,setHistoryRequests]=useState([
    {
      _id:"1",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"2",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Completed",
      sink:"Gazipur"
    },
    {
      _id:"3",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"4",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Completed",
      sink:"Gazipur"
    },
    {
      _id:"5",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"6",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Completed",
      sink:"Gazipur"
    },
    {
      _id:"7",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"8",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Completed",
      sink:"Gazipur"
    },
    {
      _id:"9",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"10",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },
    {
      _id:"11",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"12",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },
    {
      _id:"13",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"14",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },
    {
      _id:"15",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"16",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },
    {
      _id:"17",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"18",
      from:"Azwad's Pharmacy",
      to:"Someone",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    }
  ]);

  return ( 
  <div className="history-delivery">
    <NavbarDelivery/>
    <div className="delivery-history-container">
      <div className="main">
          <div className="w-100">
            <HistoryArray historyRequests={historyRequests} setHistoryRequests={setHistoryRequests}/>
          </div>
          </div>
    </div>
  </div> 
  );
}
 
export default DeliveryHistory;