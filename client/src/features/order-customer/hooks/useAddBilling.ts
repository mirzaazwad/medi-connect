import { useState } from "react"

export const useAddBilling=()=>{
  const[fullname,setFullname]=useState<string>();
  const[email,setEmail]=useState<string>();
  const[phone,setPhone]=useState<string>();
  const[address,setAddress]=useState<string>();
  const [paymentOption,setPaymentOption]=useState<string>("cash");

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  }

  return {fullname,email,phone,address,setFullname,setEmail,setPhone,setAddress,paymentOption,setPaymentOption,handleSubmit};
}