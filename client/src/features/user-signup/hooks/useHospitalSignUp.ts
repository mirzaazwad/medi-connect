import axios from "axios";
import {useState } from "react";

export const useHospitalSignUp=()=>{
  const [phone_number,setPhoneNumber]=useState<string>("");
  const [hospital,setHospital]=useState<string>("");
  const [loading,isLoading]=useState(false);
  const [opening_time,setOpeningTime]=useState<string>("");
  const [closing_time,setClosingTime]=useState<string>("");
  const [error,setError]=useState("");
  const [email]=useState("");


  const signup=async(profile_picture:string|undefined)=>{
    isLoading(true);
    const result=await axios.patch('http://localhost:8000/api/hospital/signup/'+email,{
      phone_number:phone_number,
      hospital:hospital,
      profile_picture:profile_picture,
      opening_time:opening_time,
      closing_time:closing_time,
      phone_number_verified:false
    }).then((res)=>{
      isLoading(false);
      setError("");
      console.log(res);
    }).catch((err)=>{
      setError(err.response.data.message);
      isLoading(false);
      console.log(err);
    })
    return result;
  }

  return {hospital,setHospital,phone_number,setPhoneNumber,opening_time,setOpeningTime,closing_time,setClosingTime,loading,error,setError,signup};
}
 
export default useHospitalSignUp;