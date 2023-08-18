import { useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

export const useMap = () => {
  const [location, setLocation] = useState<{lat:number,lng:number}>({ lat: 23.8103, lng: 90.4125 });
  const [active, setActive] = useState<boolean>(true);
  const [address, setAddress] = useState<string>("");
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const changeValue=(address:string)=>{
    setValue(address);
    setActive(true);
    setAddress(address);
  }

  const handleSelect = async (address:string) => {
    setValue(address);
    setActive(false);
    setAddress(address);
    clearSuggestions();
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    const coordinates={lat,lng};
    setLocation(coordinates);
    console.log(location);
  };

  return {address:{address,setAddress},location:{location,setLocation},placesAutoComplete:{active,data,status,ready,changeValue,handleSelect}};

};
