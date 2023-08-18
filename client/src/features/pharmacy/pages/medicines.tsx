import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import NavbarCustomer from "../../../partials/navbarCustomer";
import Loader from "../../../partials/loader";
import { usePagination } from "../../../hooks/usePagination";
import {useState} from 'react';
import CollapsibleChat from "../../collapsible-chat/components/collapsableChat";
import useMedicine from "../hooks/useMedicine";
import "../assets/css/medicine.css";
import MedicineHeader from "../components/medicine-pharmacy-header";
import PaginationComponent from "../../../components/pagination";
import ReviewOrder from "../components/review-pharmacy";
import MedicineDetails from "../components/medicineDetails";
import medicineInventory from "../../../assets/ts/medicine-inventory";

const PharmacyMedicines = () => {
  const {
    searchTerm,
    handleSearchTerm,
    searchCriteria,
    setSearchCriteria,
    filteredMedicines,
    setSelectedCategory,
    setSelectedType,
    types,
    categories,
    isLoading,
  } = useMedicine();
  const {displayedarrayComponents,currentPage,totalPages,handlePageChange,handleNextPageClick,handlePrevPageClick,handleFirstPageClick,handleLastPageClick}=usePagination(filteredMedicines,8);
  const [show,setShow]=useState(false);
  const [medicine,setMedicine]=useState<medicineInventory>();

  if (!isLoading) {
    return (
      <div className="medicine-container">
        <NavbarCustomer />
          {medicine && (<MedicineDetails show={show} setShow={setShow} medicine={medicine}/>)}
        <section>
          <div className="medicine-content">
          <MedicineHeader categories={categories} types={types} setSelectedCategory={setSelectedCategory} setSelectedType={setSelectedType} searchTerm={searchTerm} handleSearchTerm={handleSearchTerm}></MedicineHeader>
                <div className="medicine-cards">
                <div className="row">
                    {displayedarrayComponents &&
                    displayedarrayComponents.map((medicine) => (
                      <div
                        className="col-xs-6 col-sm-6 col-md-4 col-lg-2 mx-5"
                        key={medicine._id}
                      >
                        <Card className="medicine-card" onClick={()=>{
                          if(medicine){
                            setMedicine(medicine);
                            setShow(true);
                          }
                        }}>
                            <Card.Img
                              variant="top"
                              src={medicine.imageURL}
                              className="medicine-card-image"
                            />
                            <Card.Body>
                              <Card.Title>{medicine.medicineName}</Card.Title>
                              <Card.Subtitle className="description-text mb-2">
                                {medicine.genericName}
                              </Card.Subtitle>
                            </Card.Body>
                        </Card>
                      </div>
                    ))}
                    </div>
                </div>
                <PaginationComponent currentPage={currentPage} totalPages={totalPages} handleNextPageClick={handleNextPageClick} handleFirstPageClick={handleFirstPageClick} handlePageChange={handlePageChange} handlePrevPageClick={handlePrevPageClick} handleLastPageClick={handleLastPageClick}/>
          </div>
          <ReviewOrder customer_email="123" manager_email="123"/>
        </section>
        <CollapsibleChat
          senderID={"123"}
          receiverID={"123"}
          JWT={{ _id: "123", token: "123", userType: "123" }}
        />
      </div>
    );
  } else {
    return <Loader />;
  }
};
export default PharmacyMedicines;
