import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import Category from "../../../assets/ts/medicine-category";
import { useImageUpload } from "../../user-signup/hooks/useImageUpload";
import Type from "../../../assets/ts/medicine-type";

export const useNonStripsAddBrand=()=>{
  const navigate=useNavigate();
  const [medicineName, setMedicineName] = useState<string>();
  const [genericName, setGenericName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [sellingPrice, setSellingPrice] = useState<number>();
  const [pcsPerBox, setPcsPerBox] = useState<number>();
  const [manufacturer, setManufacturer] = useState<string>();
  const [purchasePrice, setPurchasePrice] = useState<number>();
  const {imageURL,setImage,errorImage,upload_image}=useImageUpload('/medicine.avif');
  const [medicineType,setMedicineType]=useState<Type>();
  const [prescription,setPrescription]=useState<boolean>();
  const [isLoading,setIsLoading]=useState(false);
  const [disabled,setDisabled]=useState(false);
  const [medicineCategory, setMedicineCategory] = useState<Category>();


  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
  };

  return {medicine:{
    medicineName,
    genericName,
    description,
    sellingPrice,
    manufacturer,
    purchasePrice,
    imageURL,
    prescription,
    medicineCategory,
    medicineType,
    setMedicineCategory,
    setMedicineName,
    setGenericName,
    setDescription,
    setSellingPrice,
    setManufacturer,
    setPrescription,
    setPurchasePrice,
    setImage,
    setMedicineType
  },nonStripInformation:{
    pcsPerBox,
    setPcsPerBox
  },
utilities:{
  isLoading,
  disabled,
  setDisabled,
  errorImage
}};

}