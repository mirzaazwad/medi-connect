import {useState} from 'react';
import PharmacyArray from '../assets/ts/pharmacy-array-display';
import usePharmacy from './usePharmacy';

export const useOrderByPrescription=()=>{
  const {filteredPharmacy,searchTerm,handleSearchTerm,isLoading}=usePharmacy();  

  const handleOrderByPrescription=(input:string)=>{

  }

  return {filteredPharmacy,searchTerm,handleSearchTerm,isLoading,handleOrderByPrescription};
}