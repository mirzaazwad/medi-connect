import { useState,useEffect } from "react";
import medicineInventory from "../../../assets/ts/medicine-inventory";



export const useInventory=()=>{
  const [showMedicine,setShowMedicine]=useState<boolean>(false);
  const [isLoading,setIsLoading]=useState(false);
  const [stockIndex,setStockIndex]=useState<number>();
  const [filter,setFilter]=useState<string>("medicineName");
  const [filterValue,setFilterValue]=useState<string>("");
  const [error,setError]=useState<string>("");
  const [index,setIndex]=useState<number>(0);
  const [showMedicineDetails,setShowMedicineDetails]=useState(false);
  const [medicines,setMedicines]=useState<medicineInventory[]>([
    {
      medicineName: "Medicine 1",
      genericName: "Generic 1",
      description: "Sample description 1",
      manufacturer: "Manufacturer 1",
      imageURL: "/medicine.avif",
      Category: {
        category: "Category 1",
        description: "Category description 1",
        _id: "1",
      },
      Type: {
        Name: "Type 1",
        _id: "1",
        Description: "Type description 1",
        hasStrips: true,
      },
      sellingPrice: 25.0,
      purchasePrice: 12.5,
      prescription: false,
      stripsPerBox: 5,
      pcsPerStrip: 10,
      amount:{
        pcs:12,
        strips:10,
        boxes:11,
      }
    },
    {
      medicineName: "Medicine 2",
      genericName: "Generic 2",
      description: "Sample description 2",
      manufacturer: "Manufacturer 2",
      imageURL: "/pharmacyProfilePicture.jpg",
      Category: {
        category: "Category 2",
        description: "Category description 2",
        _id: "2",
      },
      Type: {
        Name: "Type 2",
        _id: "2",
        Description: "Type description 2",
        hasStrips: true,
      },
      sellingPrice: 20.0,
      purchasePrice: 10.0,
      prescription: true,
      pcsPerBox: 30,
      amount:{
        pcs:12,
        boxes:11,
      }
    },  
    {medicineName: "Medicine 4",
    genericName: "Generic 4",
    description: "Sample description 4",
    manufacturer: "Manufacturer 4",
    imageURL: "Register.jpg",
    Category: {
      category: "Category 4",
      description: "Category description 4",
      _id: "4",
    },
    Type: {
      Name: "Type 4",
      _id: "4",
      Description: "Type description 4",
      hasStrips: true,
    },
    sellingPrice: 25.0,
    purchasePrice: 12.5,
    prescription: false,
    stripsPerBox: 5,
    pcsPerStrip: 10,
    amount:{
      pcs:12,
      strips:10,
      boxes:11,
    }
  },{
    medicineName: "Medicine 3",
      genericName: "Generic 3",
      description: "Sample description 3",
      manufacturer: "Manufacturer 3",
      imageURL: "logo.png",
      Category: {
        category: "Category 3",
        description: "Category description 3",
        _id: "3",
      },
      Type: {
        Name: "Type 3",
        _id: "3",
        Description: "Type description 3",
        hasStrips: true,
      },
      sellingPrice: 20.0,
      purchasePrice: 10.0,
      prescription: false,
      pcsPerBox: 30,
      amount:{
        pcs:12,
        boxes:11,
      }
    },
    {
      medicineName: "Medicine 6",
      genericName: "Generic 1",
      description: "Sample description 1",
      manufacturer: "Manufacturer 1",
      imageURL: "/medicine.avif",
      Category: {
        category: "Category 1",
        description: "Category description 1",
        _id: "1",
      },
      Type: {
        Name: "Type 1",
        _id: "1",
        Description: "Type description 1",
        hasStrips: true,
      },
      sellingPrice: 25.0,
      purchasePrice: 12.5,
      prescription: false,
      stripsPerBox: 5,
      pcsPerStrip: 10,
      amount:{
        pcs:12,
        strips:10,
        boxes:11,
      }
    },
    {
      medicineName: "Medicine 5",
      genericName: "Generic 2",
      description: "Sample description 2",
      manufacturer: "Manufacturer 2",
      imageURL: "/pharmacyProfilePicture.jpg",
      Category: {
        category: "Category 2",
        description: "Category description 2",
        _id: "2",
      },
      Type: {
        Name: "Type 2",
        _id: "2",
        Description: "Type description 2",
        hasStrips: true,
      },
      sellingPrice: 20.0,
      purchasePrice: 10.0,
      prescription: true,
      pcsPerBox: 30,
      amount:{
        pcs:12,
        boxes:11,
      }
    },
    {
      medicineName: "Medicine 8",
      genericName: "Generic 1",
      description: "Sample description 1",
      manufacturer: "Manufacturer 1",
      imageURL: "/medicine.avif",
      Category: {
        category: "Category 1",
        description: "Category description 1",
        _id: "1",
      },
      Type: {
        Name: "Type 1",
        _id: "1",
        Description: "Type description 1",
        hasStrips: true,
      },
      sellingPrice: 25.0,
      purchasePrice: 12.5,
      prescription: false,
      stripsPerBox: 5,
      pcsPerStrip: 10,
      amount:{
        pcs:12,
        strips:10,
        boxes:11,
      }
    },
    {
      medicineName: "Medicine 7",
      genericName: "Generic 2",
      description: "Sample description 2",
      manufacturer: "Manufacturer 2",
      imageURL: "/pharmacyProfilePicture.jpg",
      Category: {
        category: "Category 2",
        description: "Category description 2",
        _id: "2",
      },
      Type: {
        Name: "Type 2",
        _id: "2",
        Description: "Type description 2",
        hasStrips: true,
      },
      sellingPrice: 20.0,
      purchasePrice: 10.0,
      prescription: true,
      pcsPerBox: 30,
      amount:{
        pcs:12,
        strips:10,
        boxes:11,
      }
    },
    {
      medicineName: "Medicine 10",
      genericName: "Generic 1",
      description: "Sample description 1",
      manufacturer: "Manufacturer 1",
      imageURL: "/medicine.avif",
      Category: {
        category: "Category 1",
        description: "Category description 1",
        _id: "1",
      },
      Type: {
        Name: "Type 1",
        _id: "1",
        Description: "Type description 1",
        hasStrips: true,
      },
      sellingPrice: 25.0,
      purchasePrice: 12.5,
      prescription: false,
      stripsPerBox: 5,
      pcsPerStrip: 10,
      amount:{
        pcs:12,
        strips:10,
        boxes:11,
      }
    },
    {
      medicineName: "Medicine 9",
      genericName: "Generic 2",
      description: "Sample description 2",
      manufacturer: "Manufacturer 2",
      imageURL: "/pharmacyProfilePicture.jpg",
      Category: {
        category: "Category 2",
        description: "Category description 2",
        _id: "2",
      },
      Type: {
        Name: "Type 2",
        _id: "2",
        Description: "Type description 2",
        hasStrips: false,
      },
      sellingPrice: 20.0,
      purchasePrice: 10.0,
      prescription: true,
      pcsPerBox: 30,
      amount:{
        pcs:12,
        boxes:11,
      }
    }
  ]);
  

  const [filteredMedicines,setFilteredMedicines]=useState<medicineInventory[]>([]);

  useEffect(()=>{
    setFilteredMedicines(medicines);
  },[medicines])

  const handleFilterValueChange=(input:string)=>{
    setFilterValue(input);
  }

  const handleFilterChange=(input:string)=>{
    setFilter(input);
  }

  return {medicines,setMedicines,index,setIndex,showMedicineDetails,setShowMedicineDetails, isLoading,showMedicine,setShowMedicine,filteredMedicines,filterValue,handleFilterValueChange,error,setError};

}