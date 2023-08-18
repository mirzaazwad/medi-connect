import { useEffect, useState } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import {Card} from "react-bootstrap";
import '../../../assets/css/map.css';


const GMap = ()=>{
  const [markerPosition, setMarkerPosition] = useState({lat:23.8103,lng:90.4125});

  useEffect(()=>{
    getUserLocation();
  },[markerPosition])


  const handleMapClick = async(e:google.maps.MapMouseEvent) => {
    setMarkerPosition({
      lat: e?.latLng?.lat() || 0,
      lng: e?.latLng?.lng() || 0,
    });
  };

  const handleMarkerDragEnd = async(event:google.maps.MapMouseEvent) => {
    setMarkerPosition({
      lat: event?.latLng?.lat() || 0,
      lng: event?.latLng?.lng() || 0,
    });
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
      <Card className="map">
        <Card.Body>
        <GoogleMap zoom={14} center={markerPosition} mapContainerClassName="map-container" onClick={handleMapClick}>
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
        <button onClick={getUserLocation}  className="custom-button full-width">Get Current Location</button>
        </Card.Body>
      </Card>
   );
}

export default GMap;