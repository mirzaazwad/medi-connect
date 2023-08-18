export interface MapLocation{
  location:{
    location:{lat:number,lng:number};
    setLocation:React.Dispatch<React.SetStateAction<{
    lat: number;
    lng: number;
}>>;
  };
  address:{
    address:string; 
  setAddress:React.Dispatch<React.SetStateAction<string>>;
  };
  modalMap:{
    show:boolean;
    setShow:React.Dispatch<React.SetStateAction<boolean>>;
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