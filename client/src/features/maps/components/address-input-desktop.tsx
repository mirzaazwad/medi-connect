import { IonIcon } from "@ionic/react";
import { mapOutline } from "ionicons/icons";

interface AddressInputDesktop {
  address: {
      address: string;
      setAddress: React.Dispatch<React.SetStateAction<string>>;
  };
  placesAutoComplete: {
    active: boolean;
    data: google.maps.places.AutocompletePrediction[];
    status: `${google.maps.places.PlacesServiceStatus}` | "";
    ready: boolean;
    changeValue: (address: string) => void;
    handleSelect: (address: string) => Promise<void>;
  };
}

const AddressInputDesktop = ({address,placesAutoComplete}:AddressInputDesktop) => {
  return ( 
    <div className="inputbox mx-auto search-bar">
    <IonIcon icon={mapOutline}></IonIcon>
    <input
      type="text"
      id="address"
      name="address"
      required
      value={address.address}
      onChange={(e) =>
        placesAutoComplete.changeValue(e.target.value)
      }
    />
    <label htmlFor="address">Address</label>
    {placesAutoComplete.active &&
      placesAutoComplete.data.length > 0 &&
      placesAutoComplete.status === "OK" && (
        <ul className="suggestions">
          {placesAutoComplete.data.map(
            ({ place_id, description }) => (
              <li
                key={place_id}
                onClick={() =>
                  placesAutoComplete.handleSelect(description)
                }
              >
                {description}
              </li>
            )
          )}
        </ul>
      )}
  </div>
   );
}
 
export default AddressInputDesktop;