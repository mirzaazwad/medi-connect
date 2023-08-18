import { useState } from "react";
import medicine from "../../../assets/ts/medicine";
import Category from "../../../assets/ts/medicine-category";
import Type from "../../../assets/ts/medicine-type";
import medicineInventory from "../../../assets/ts/medicine-inventory";

export const useMedicine=()=>{
  const [medicines, setMedicines] = useState<medicineInventory[]>([
    {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }
    },
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }
    },
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Pyretic",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Syrup",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:false
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para2",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:
        {
          category:"Anti-Baal",
          description:"Helps with fevers",
          _id:"123"
        },
      Type:{
        Name:"Baal Saal",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:true
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }},
      {medicineName:"Para",
      genericName:"12",
      description:"12",
      manufacturer:"12",
      sellingPrice:12,
      purchasePrice:11,
      prescription:true,
      imageURL:"/medicine.avif",
      Category:{
        category:"Anti-Saal",
        description:"Helps with fevers",
        _id:"123"
      },
      Type:{
        Name:"Tablet",
        Description:"Edible Medication",
        _id:"1234",
        hasStrips:true
      },
      amount:{
        pcs:10,
        strips:11,
        boxes:3
      }}
  ]);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [categories, setCategories] = useState<Category[]>([
    {
      category:"Anti-Pyretic",
      description:"Helps with fevers",
      _id:"123"
    },
    {
      category:"Anti-Baal",
      description:"Helps with fevers",
      _id:"123"
    },
    {
      category:"Anti-Saal",
      description:"Helps with fevers",
      _id:"123"
    },
  ]);
  const [types, setTypes] = useState<Type[]>([
    {
      Name:"Tablet",
      Description:"Edible Medication",
      _id:"1234",
      hasStrips:true
    },
    {
      Name:"Syrup",
      Description:"Edible Medication",
      _id:"1234",
      hasStrips:false
    },
    {
      Name:"Baal Saal",
      Description:"Edible Medication",
      _id:"1234",
      hasStrips:true
    }
  ]);
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
  const [selectedType, setSelectedType] = useState<Type[]>([]);
  const [searchCriteria, setSearchCriteria] = useState("medicine");
  const [isLoading, setisLoading] = useState(false);
  
  
  const filteredMedicines = medicines?medicines.filter((medicine) => {
    if(searchTerm){
      // Apply search term filtering
    const includesSearchTerm = searchCriteria === "medicine"
    ? medicine.medicineName.toLowerCase().includes(searchTerm.toLowerCase())
    : medicine.genericName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply category filtering
    const includesCategory = selectedCategory.length === 0
    || selectedCategory.includes(medicine.Category);
    
    const includesType = selectedType.length === 0
    || selectedType.includes(medicine.Type);
    
    return includesCategory && includesSearchTerm && includesType;
    }
    else{
      return medicines;
    }
  }):undefined;

  const handleSearchTerm=(input:string)=>{
    setSearchTerm(input);
  }

  return {searchTerm,handleSearchTerm,searchCriteria,setSearchCriteria,filteredMedicines,setSelectedCategory,setSelectedType,types,categories,isLoading};
}

export default useMedicine;