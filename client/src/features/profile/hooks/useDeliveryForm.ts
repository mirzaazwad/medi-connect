import { useState } from "react";

export const useDeliveryForm=(email:string)=>{
  const [username,setUsername]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const [phone,setPhoneNumber]=useState<string>("");
  const [isLoading,setIsLoading]=useState<boolean>(false);
  const [error,setError]=useState<string>();

  return {username,setUsername,password,setPassword,phone,setPhoneNumber,isLoading,error};
}

export default useDeliveryForm;