import { Pagination } from "react-bootstrap";
import { useState } from "react";
import HistoryCard from "./history-card";
import { usePagination } from "../../../hooks/usePagination";
import PaginationComponent from "../../../components/pagination";

type HistoryArrayProps = {
  historyRequests: {
    _id: string;
    from: string;
    to: string;
    source: string;
    status: string;
    sink: string;
  }[];
  setHistoryRequests: React.Dispatch<
    React.SetStateAction<
      {
        _id: string;
        from: string;
        to: string;
        source: string;
        status: string;
        sink: string;
      }[]
    >
  >;
};

const HistoryArray = ({
  historyRequests,
  setHistoryRequests,
}: HistoryArrayProps) => {
  const {displayedarrayComponents,currentPage,totalPages,handleFirstPageClick,handleLastPageClick,handleNextPageClick,handlePageChange,handlePrevPageClick}=usePagination(historyRequests,8);
  return (
    <div className="history">
      <div>
        <div className="row">
          {displayedarrayComponents.map((history) => (
            <div key={history._id}>
              <HistoryCard history={history} />
            </div>
          ))}
        </div>
        <PaginationComponent currentPage={currentPage} totalPages={totalPages} handleFirstPageClick={handleFirstPageClick} handleLastPageClick={handleLastPageClick} handleNextPageClick={handleNextPageClick} handlePageChange={handlePageChange} handlePrevPageClick={handlePrevPageClick}/>
      </div>
    </div>
  );
};

export default HistoryArray;
