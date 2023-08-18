import { Pagination } from "react-bootstrap";
import { useState } from "react";
import OngoingCard from "./ongoing-card";
import { usePagination } from "../../../hooks/usePagination";
import PaginationComponent from "../../../components/pagination";

type OngoingArrayProps={
  ongoingRequests: {
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
  setOngoingRequests:React.Dispatch<React.SetStateAction<{
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

const OngoingArray = ({ongoingRequests,setOngoingRequests}:OngoingArrayProps) => {
  const {displayedarrayComponents,currentPage,totalPages,handleFirstPageClick,handleLastPageClick,handleNextPageClick,handlePageChange,handlePrevPageClick}=usePagination(ongoingRequests,4);
  return ( 
  <div className="dashboard-array">
    <div>
      <div className="row">
        {
          displayedarrayComponents.map((ongoing) => (
            <div
              key={ongoing._id}
            >
                <OngoingCard
                  ongoing={ongoing}
                />
            </div>
          ))}
      </div>
      <PaginationComponent currentPage={currentPage} totalPages={totalPages} handleFirstPageClick={handleFirstPageClick} handleLastPageClick={handleLastPageClick} handleNextPageClick={handleNextPageClick} handlePageChange={handlePageChange} handlePrevPageClick={handlePrevPageClick}/>
    </div>
  </div> 
  );
}
 
export default OngoingArray;