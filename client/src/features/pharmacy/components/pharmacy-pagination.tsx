import { Link } from "react-router-dom";
import PharmacyCard from "./pharmacy-card";
import {  usePagination } from "../../../hooks/usePagination";
import PharmacyArray from "../assets/ts/pharmacy-array-display";
import PaginationComponent from "../../../components/pagination";

const PharmacyPagination = ({pharmacies}:PharmacyArray) => {
  const {displayedarrayComponents,currentPage,totalPages,handlePageChange,handleNextPageClick,handlePrevPageClick,handleFirstPageClick,handleLastPageClick}=usePagination(pharmacies,8);

  return (
    <div>
      <div className="row">
        {displayedarrayComponents!==undefined && displayedarrayComponents.map((pharmacy) => (
            <div
              className="col-xs-6 col-sm-6 col-md-3 col-lg-2 mx-5 my-4"
              key={pharmacy._id}
            >
              <Link
                to={`/customer/pharmacy/medicine/${pharmacy._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <PharmacyCard
                  name={pharmacy.name}
                  address={pharmacy.address}
                  image={pharmacy.image}
                />
              </Link>
            </div>
          ))}
      </div>
      <PaginationComponent currentPage={currentPage} totalPages={totalPages} handleNextPageClick={handleNextPageClick} handleFirstPageClick={handleFirstPageClick} handlePageChange={handlePageChange} handlePrevPageClick={handlePrevPageClick} handleLastPageClick={handleLastPageClick}/>
    </div>
  );
};

export default PharmacyPagination;
