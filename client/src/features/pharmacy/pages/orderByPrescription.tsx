import { Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import NavbarCustomer from "../../../partials/navbarCustomer";
import { useOrderByPrescription } from "../hooks/useOrderByPrescription";
import { searchCircleOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import PharmacyPrescriptionPagination from "../components/pharmacy-prescription-pagination";

const OrderByPrescription = () => {
  const {filteredPharmacy,searchTerm,handleSearchTerm,isLoading,handleOrderByPrescription}=useOrderByPrescription();
  return (
    <div>
      <NavbarCustomer/>
      <div className='pharmacy-container'>
        <NavbarCustomer/>
        <section>
          <div className="pharmacy-content">
            <div className="d-flex justify-content-center search">
              <div className="inputbox searchbar">
                <IonIcon icon={searchCircleOutline}></IonIcon>
                <input
                  type="search"
                  className="me-2"
                  placeholder='Search For A Pharmacy'
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => handleSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <PharmacyPrescriptionPagination pharmacies={filteredPharmacy}/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderByPrescription;