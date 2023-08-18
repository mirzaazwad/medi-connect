import {  usePagination } from "../../../hooks/usePagination";
import PharmacyArray from "../assets/ts/pharmacy-array-display";
import PaginationComponent from "../../../components/pagination";
import PharmacyPrescriptionCard from "./pharmacy-prescription-card";

const PharmacyPrescriptionPagination = ({pharmacies}:PharmacyArray) => {
  const {displayedarrayComponents,currentPage,totalPages,handlePageChange,handleNextPageClick,handlePrevPageClick,handleFirstPageClick,handleLastPageClick}=usePagination(pharmacies,8);

  return (
    <div>
      <div className="row">
        {displayedarrayComponents!==undefined && displayedarrayComponents.map((pharmacy) => (
            <div
              className="col-xs-6 col-sm-6 col-md-3 col-lg-2 mx-5 my-4"
              key={pharmacy._id}
            >
                <PharmacyPrescriptionCard
                  _id={pharmacy._id}
                  name={pharmacy.name}
                  address={pharmacy.address}
                  image={pharmacy.image}
                />
            </div>
          ))}
      </div>
      <PaginationComponent currentPage={currentPage} totalPages={totalPages} handleNextPageClick={handleNextPageClick} handleFirstPageClick={handleFirstPageClick} handlePageChange={handlePageChange} handlePrevPageClick={handlePrevPageClick} handleLastPageClick={handleLastPageClick}/>
    </div>
  );
};

export default PharmacyPrescriptionPagination;
