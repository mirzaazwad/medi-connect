import NavbarPharmacy from "../../../partials/navbarPharmacy";
import Loader from "../../../partials/loader";
import AddExistingMedicine from "../components/addExistingMedicine";
import { useInventory } from "../hooks/useInventory";
import '../assets/css/inventory.css';
import PaginationComponent from "../../../components/pagination";
import { usePagination } from "../../../hooks/usePagination";
import MedicineInventoryDetails from "../components/medicine-inventory-details";
import InventoryHeader from "../components/inventory-header";
import MedicineTable from "../components/medicine-table";

const Inventory = () => {
  const {medicines,setMedicines,index,setIndex,showMedicineDetails,setShowMedicineDetails, isLoading,showMedicine,setShowMedicine,filteredMedicines,filterValue,handleFilterValueChange,error,setError}=useInventory();
  const {displayedarrayComponents,currentPage,
    totalPages,
    handleNextPageClick,
    handleFirstPageClick,
    handlePageChange,
    handlePrevPageClick,
    handleLastPageClick}=usePagination(filteredMedicines,13);
  if (!isLoading) {
    return (
      <div>
        <div>
          <NavbarPharmacy/>
        </div>
        <MedicineInventoryDetails medicines={medicines} setMedicines={setMedicines} index={index} show={showMedicineDetails} setShow={setShowMedicineDetails} setError={setError}/>
        <AddExistingMedicine show={showMedicine} setShow={setShowMedicine}/>
        <section className="inventory-section">
          <div className="w-100 m-auto  flex-column">
            <InventoryHeader error={error} setShowMedicine={setShowMedicine} handleFilterValueChange={handleFilterValueChange} filterValue={filterValue}/>
            <MedicineTable medicines={displayedarrayComponents} setIndex={setIndex} setShowMedicineDetails={setShowMedicineDetails}/>
          </div>
            <div className="w-100 d-flex justify-content-center">
            <PaginationComponent currentPage={currentPage} totalPages={totalPages} handleNextPageClick={handleNextPageClick} handleFirstPageClick={handleFirstPageClick} handlePageChange={handlePageChange} handlePrevPageClick={handlePrevPageClick} handleLastPageClick={handleLastPageClick}></PaginationComponent>
            </div>
        </section>
      </div>
    );
  } else {
    return (
      <Loader/>
    )
  }
};
export default Inventory;
