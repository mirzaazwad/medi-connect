import { useState } from "react";

export const usePharmacyForm=(email:string)=>{
  const [username,setUsername]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const [phone,setPhoneNumber]=useState<string>("");
  const [isLoading,setIsLoading]=useState<boolean>(false);
  const [pharmacy,setPharmacy]=useState<string>("");
  const [error,setError]=useState<string>();

  return {pharmacy,setPharmacy,username,setUsername,password,setPassword,phone,setPhoneNumber,isLoading,error};
}

export default usePharmacyForm;