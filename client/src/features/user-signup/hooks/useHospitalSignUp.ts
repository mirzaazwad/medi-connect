import axios from "axios";
import {useState } from "react";

export const useHospitalSignUp=()=>{
  const [phone_number,setPhoneNumber]=useState<string>("");
  const [transportation,setTransportation]=useState<string>("cycle");
  const [loading,isLoading]=useState(false);
  const [error,setError]=useState("");
  const [email]=useState("");


  const signup=async(phone_number:string,profile_picture:string|undefined)=>{
    isLoading(true);
    const result=await axios.patch('http://localhost:8000/api/customer/signup/'+email,{
      phone_number:phone_number,
      profile_picture:profile_picture
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

  return {transportation,setTransportation,phone_number,setPhoneNumber,loading,error,setError,signup};
}
 
export default useHospitalSignUp;