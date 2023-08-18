import { Card } from "react-bootstrap";
import { useImageUpload } from "../../user-signup/hooks/useImageUpload";
import { usePrescriptions } from "../hooks/usePrescriptions";
import NavbarCustomer from "../../../partials/navbarCustomer";
import '../assets/css/prescription.css';
import OrderFileInput from "../components/orderInput";
import PaginationComponent from "../../../components/pagination";
import PrescriptionCard from "../components/prescriptionCards";

const Prescription = () => {
  const { pagination,handlePrescriptionSubmit } = usePrescriptions();
  const { imageURL, setImage, upload_image } = useImageUpload("/medicine.avif");
  return (
    <div className="prescription">
      <NavbarCustomer/>
      <OrderFileInput handlePrescriptionSubmit={handlePrescriptionSubmit} setImage={setImage}/>
      {pagination.displayedarrayComponents && pagination.displayedarrayComponents.map((prescription,index)=>(
        <PrescriptionCard prescriptionName={prescription.prescriptionName} uploadDate={prescription.uploadDate} imageURL={prescription.imageURL}/>
      ))}
      <PaginationComponent currentPage={pagination.currentPage} totalPages={pagination.totalPages} handleFirstPageClick={pagination.handleFirstPageClick} handleLastPageClick={pagination.handleLastPageClick} handleNextPageClick={pagination.handleNextPageClick} handlePageChange={pagination.handlePageChange} handlePrevPageClick={pagination.handlePrevPageClick}/>
    </div>
  );
};

export default Prescription;
