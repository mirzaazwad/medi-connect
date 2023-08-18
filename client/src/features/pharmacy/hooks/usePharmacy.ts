import {useState,useEffect} from 'react';
import PharmacyDisplay from '../assets/ts/pharmacy';
import PharmacyArray from '../assets/ts/pharmacy-array-display';
import PharmacyArrayComponent from '../assets/ts/pharmacy-array';

export const usePharmacy=()=>{
  const [Pharmacy, setPharmacies] = useState<PharmacyArray>(
    {pharmacies:[
      {
        _id:"1230",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1231",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1232",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1234",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1235",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1236",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1237",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1238",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1239",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1240",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1241",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1242",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1243",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1244",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1245",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1246",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1247",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1248",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1249",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1250",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1251",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1252",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1253",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1254",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1255",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1256",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1257",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1258",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },{
        _id:"1259",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      },
      {
        _id:"1260",
        name:"Azwad's Pharmacy",
        address:"Mohammadpur",
        image:"/pharmacyProfilePicture.png"
      }
    ]}
  );
  const [searchTerm,setSearchTerm]=useState<string>();
  const [filteredPharmacy,setFilteredPharmacy]=useState<PharmacyArrayComponent[]|undefined>();
  const [isLoading,setIsLoading]=useState(false);
  const [searchCriteria,setSearchCriteria]=useState("pharmacy");

  useEffect(()=>{
    setFilteredPharmacy(Pharmacy.pharmacies);
  },[])

  const handleSearchTerm=(input:string)=>{
    setSearchTerm(input);
    if(input==="" ||input===undefined){
      setFilteredPharmacy(Pharmacy.pharmacies);
    }
    if(Pharmacy.pharmacies!==undefined && input!==undefined){
      setFilteredPharmacy(Pharmacy.pharmacies.filter((value)=>value.name.includes(input.toLowerCase())));
    }
  }


  return {filteredPharmacy,searchTerm,handleSearchTerm,isLoading};
}

export default usePharmacy;