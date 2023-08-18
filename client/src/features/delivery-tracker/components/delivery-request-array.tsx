import { Pagination } from "react-bootstrap";
import DeliveryCard from "./delivery-dashboard-cards";
import { useState } from "react";
import { usePagination } from "../../../hooks/usePagination";
import PaginationComponent from "../../../components/pagination";

type DashboardArrayProps={
  deliveryRequests: {
    _id: string;
    from: string;
    to: string;
    source: string;
    sourceLocation: {
        lat: number;
        lng: number;
    };
    sinkLocation: {
      lat: number;
      lng: number;
    };
    sink: string;
}[],
  setDeliveryRequests:React.Dispatch<React.SetStateAction<{
    _id: string;
    from: string;
    to: string;
    source: string;
    sourceLocation: {
        lat: number;
        lng: number;
    };
    sinkLocation: {
      lat: number;
      lng: number;
    };
    sink: string;
}[]>>
}

const DeliveryRequestArray = ({deliveryRequests,setDeliveryRequests}:DashboardArrayProps) => {
  const {displayedarrayComponents,currentPage,totalPages,handleFirstPageClick,handleLastPageClick,handleNextPageClick,handlePageChange,handlePrevPageClick}=usePagination(deliveryRequests,3);
  return ( 
  <div className="dashboard-array">
    <div>
      <div className="row">
        {
          displayedarrayComponents.map((delivery) => (
            <div
              key={delivery._id}
            >
                <DeliveryCard
                  delivery={delivery}
                />
            </div>
          ))}
      </div>
      <PaginationComponent currentPage={currentPage} totalPages={totalPages} handleFirstPageClick={handleFirstPageClick} handleLastPageClick={handleLastPageClick} handleNextPageClick={handleNextPageClick} handlePageChange={handlePageChange} handlePrevPageClick={handlePrevPageClick}/>
    </div>
  </div> 
  );
}
 
export default DeliveryRequestArray;