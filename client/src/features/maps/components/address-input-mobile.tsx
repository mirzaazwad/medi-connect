import { IonIcon } from "@ionic/react";
import { mapOutline } from "ionicons/icons";
import Map from "./map-modal/map";
import { useState } from "react";
import '../assets/css/map.css'

interface AddressInputPhone {
  address: {
      address: string;
      setAddress: React.Dispatch<React.SetStateAction<string>>;
  };
  location: {
    location: {
        lat: number;
        lng: number;
    };
    setLocation: React.Dispatch<React.SetStateAction<{
        lat: number;
        lng: number;
    }>>;
};
  placesAutoComplete: {
    active: boolean;
    data: google.maps.places.AutocompletePrediction[];
    status: `${google.maps.places.PlacesServiceStatus}` | "";
    ready: boolean;
    changeValue: (address: string) => void;
    handleSelect: (address: string) => Promise<void>;
  };
  disabled:boolean;
}

const AddressInputPhone = ({address,location,placesAutoComplete,disabled}:AddressInputPhone) => {
  const [show,setShow]=useState<boolean>(false);
  return ( 
    <div className="phone">
      <div className="inputbox mx-auto search-bar">
                <IonIcon icon={mapOutline}></IonIcon>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={address.address}
                  onClick={()=>setShow(true)}
                  disabled={disabled}
                  readOnly
                />
                <label htmlFor="address">Address</label>
              </div>
              <div className="signup-map-mobile">
              <Map address={address} location={location} placesAutoComplete={placesAutoComplete} modalMap={{show,setShow}}/>
              </div>
    </div>
   );
}
 
export default AddressInputPhone;