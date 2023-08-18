import { useLoadScript,LoadScriptProps  } from "@react-google-maps/api";
import GMap from "./googleMap";
import { MapLocation } from "./mapLocation";
import Loader from "../../../../partials/loader";

type Libraries = LoadScriptProps['libraries'];
const libraries: Libraries = ['places'];


const Map = ({location,address,placesAutoComplete,modalMap}:MapLocation) => {
  const { isLoaded }: { isLoaded: boolean } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMPKEY || '', 
    libraries,
  });
  if (!isLoaded) {
    return (<Loader/>)
  } 
  else{
    return (<GMap location={location} address={address} placesAutoComplete={placesAutoComplete} modalMap={modalMap}/>)
  }
}

 
export default Map;