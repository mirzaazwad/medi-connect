import {useState} from 'react';
import { prescription } from '../../../assets/ts/prescription';
import { usePagination } from '../../../hooks/usePagination';
export const usePrescriptions=()=>{
  const [prescriptions,setPrescriptions]=useState<prescription[]>([{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },
  {
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  },{
    _id:"123",
    prescriptionName:"Hello 123",
    uploadDate:new Date(),
    imageURL:"/brokenProfilePicture.jpg"
  }
]);

  const handlePrescriptionSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  }

  const {displayedarrayComponents,currentPage,totalPages,handleFirstPageClick,handleLastPageClick,handleNextPageClick,handlePageChange,handlePrevPageClick}=usePagination(prescriptions,8);

  return {pagination:{displayedarrayComponents,currentPage,totalPages,handleFirstPageClick,handleLastPageClick,handleNextPageClick,handlePageChange,handlePrevPageClick},handlePrescriptionSubmit};
}