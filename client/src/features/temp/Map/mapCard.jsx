import { useLoadScript } from "@react-google-maps/api";
import MapCard from "./googleMapCard";
import Loading from "./mapLoading";
const libraries= [`${process.env.REACT_APP_LIBRARY}`];

const MapDelivery = ({location,setLocation,orders,routeLocation}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMPKEY,
    libraries,
  });
  if (!isLoaded || location===null || location===undefined) {
    return (<Loading></Loading>)
  } 
  else{
    return (<MapCard routeLocation={routeLocation} currentLocation={location} setLocation={setLocation} orders={orders}></MapCard>)
  }
}

 
export default MapDelivery;