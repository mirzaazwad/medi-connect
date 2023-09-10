import axios from "axios";
import { useState } from "react";

export const useDoctorSignUp=()=>{
  const [phone_number,setPhoneNumber]=useState<string>("");
  const [nid_number,setNIDNumber]=useState<string>("");
  const [doctor_name,setDoctorName]=useState<string>("");
  const [opening_time,setOpeningTime]=useState<string>("");
  const [closing_time,setClosingTime]=useState<string>("");
  const [loading,isLoading]=useState(false);
  const [error,setError]=useState("");
  const [email]=useState("");


  const signup=async(profile_picture:string|undefined)=>{
    isLoading(true);
    const result=await axios.patch('http://localhost:8000/api/doctor/signup/'+email,{
      phone_number:phone_number,
      nid_number:nid_number,
      doctor_name:doctor_name,
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

  return {doctor_name,setDoctorName,nid_number,setNIDNumber,opening_time,setOpeningTime,closing_time,setClosingTime,phone_number,setPhoneNumber,loading,error,setError,signup};
}