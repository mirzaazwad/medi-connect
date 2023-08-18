import { useState } from "react";
import DeliveryCard from "../components/delivery-dashboard-cards";
import DeliveryRequestArray from "../components/delivery-request-array";
import NavbarDelivery from "../../../partials/navbarDelivery";
import Map from "../../maps/components/map-delivery/map-delivery-request/map";
import '../assets/css/delivery-requests.css';

const DeliveryRequest = () => {
  const [navigation,setNavigation]=useState(false);
  const viewDetails=()=>{

  }

  const [deliveryRequests,setDeliveryRequests]=useState([
    {
      _id:"1",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"2",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"3",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"4",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"5",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"6",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"7",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"8",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"9",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"10",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"11",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"12",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"13",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"14",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"15",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"16",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"17",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"18",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    }
  ]);

  return ( 
    <div className="dashboard-delivery">
    <NavbarDelivery/>
    <div className="delivery-delivery-container">
          <div className="delivery">
          <div className="delivery-map">
            <Map/>
          </div>
          <div className="delivery-requests">
          <DeliveryRequestArray deliveryRequests={deliveryRequests} setDeliveryRequests={setDeliveryRequests}/>
          </div>
          </div>
    </div>
  </div> 
  );
}
 
export default DeliveryRequest;