import { useEffect, useState } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import {Modal} from "react-bootstrap";
import '../../assets/css/map.css';
import { mapOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { MapLocation } from "./mapLocation";

const GMap = ({location,address,placesAutoComplete,modalMap}:MapLocation)=>{
  const [markerPosition, setMarkerPosition] = useState({lat:23.8103,lng:90.4125});

  useEffect(()=>{
    setMarkerPosition(location.location);
  },[location.location])

  const getPlaceDetails = async (lat:number, lng:number) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GMPKEY}`
    );
    const data = await response.json();
    if (data.status === "OK") {
      address.setAddress(data.results[0].formatted_address);
    } else {
      console.log("Geocode was not successful for the following reason:", data.status);
      address.setAddress("");
    }
  };

  const handleMapClick = async(e:google.maps.MapMouseEvent) => {
    setMarkerPosition({
      lat: e?.latLng?.lat() || 0,
      lng: e?.latLng?.lng() || 0,
    });
    location.setLocation({
      lat: e?.latLng?.lat() || 0,
      lng: e?.latLng?.lng() || 0,
    });
    await getPlaceDetails(e?.latLng?.lat() || 0,e?.latLng?.lng() || 0);
  };

  const handleMarkerDragEnd = async(event:google.maps.MapMouseEvent) => {
    setMarkerPosition({
      lat: event?.latLng?.lat() || 0,
      lng: event?.latLng?.lng() || 0,
    });
    location.setLocation({
      lat: event?.latLng?.lat() || 0,
      lng: event?.latLng?.lng() || 0,
    });
    await getPlaceDetails(event?.latLng?.lat() || 0,event?.latLng?.lng() || 0);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setMarkerPosition(userLocation);
      });
    } else {
      console.log('cant get location in legacy browser');
    }
  };


  return ( 
      <Modal show={modalMap.show}>
        <Modal.Header>
          <h1>Set Location</h1>
        </Modal.Header>
        <Modal.Body className="modal-container">
        <div className="inputbox mx-auto search-bar">
                <IonIcon icon={mapOutline}></IonIcon>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address.address}
                  required
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
        <div className="map-modal">
        <GoogleMap zoom={14} center={markerPosition} mapContainerClassName="map-container-modal" onClick={handleMapClick}>
        <MarkerF
          position={markerPosition}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
          visible={true}
          icon={{
            url: '/self-marker2.png', 
            scaledSize: new window.google.maps.Size(40, 40),
            anchor: new window.google.maps.Point(20, 29),
          }}
        />
        </GoogleMap>
        </div>
        </Modal.Body>
        <Modal.Footer> 
          <div className="d-flex mx-auto w-100">
            <div className="w-50">
            <button onClick={getUserLocation}  className="custom-button full-width">Get Current Location</button>
            </div>
            <div className="w-50">
            <button onClick={()=>modalMap.setShow(false)}  className="custom-button full-width">Set Marker Location</button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
   );
}

export default GMap;