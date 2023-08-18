import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useDeliverySignUp=()=>{
  const [phone_number,setPhoneNumber]=useState<string>("");
  const [transportation,setTransportation]=useState<string>("cycle");
  const navigate=useNavigate();
  const [loading,isLoading]=useState(false);
  const [error,setError]=useState("");
  const [email,setEmail]=useState("");
  const user:string|null=localStorage.getItem("user");
  useEffect(()=>{
    if(user!==null){
      setEmail(JSON.parse(user).email);
    }
    else{
      navigate('/signup');
    }
  },[])


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
 
export default useDeliverySignUp;