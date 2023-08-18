import { useLoadScript } from "@react-google-maps/api";
import Loading from "../../../../../temp/src/Components/partials/Map/mapLoading";
import SearchMapModal from "./searchMapModal";
const libraries=[`${process.env.REACT_APP_LIBRARY}`];


const SearchMap = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMPKEY,
    libraries,
  });
  if (!isLoaded) {
    return (<Loading show={props.show} handleClose={()=>props.setShow(false)}></Loading>)
  } 
  else{
    return (<SearchMapModal sortPharmacies={props.sortPharmacies} customerId={props.customerId} pharmacies={props.pharmacies} currentLocation={props.currentLocation} startDropDown={props.startDropDown} dropdown={props.dropdown} show={props.show} handleClose={()=>props.setShow(false)} setLocation={props.setLocation}></SearchMapModal>)
  }
}

 
export default SearchMap;