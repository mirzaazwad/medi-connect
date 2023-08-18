import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonIcon } from "@ionic/react";
import { searchCircleOutline } from "ionicons/icons";
import FilterMedicine from "./filter-medicine";
import Category from "../../../assets/ts/medicine-category";
import Type from "../../../assets/ts/medicine-type";
import { useState } from "react";

interface MedicineHeaderProps {
  categories: Category[] | undefined;
  types: Type[] | undefined;
  setSelectedType: React.Dispatch<React.SetStateAction<Type[]>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category[]>>;
  searchTerm: string|undefined;
  handleSearchTerm: (input: string) => void;
}

const MedicineHeader = ({
  categories,
  types,
  setSelectedType,
  setSelectedCategory,
  searchTerm,
  handleSearchTerm,
}: MedicineHeaderProps) => {
  const [show, setShow] = useState(false);
  return (
    <div className="d-flex medicine-header">
      <div className="medicine-filter">
        <button type="button" className="filter" onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
        </button>
      </div>
      <div className="medicine-searchbar inputbox">
        <IonIcon icon={searchCircleOutline}></IonIcon>
        <input
          type="search"
          className="me-2"
          placeholder="Search For Medicines"
          aria-label="Search"
          id="search"
          value={searchTerm}
          onChange={(e) => handleSearchTerm(e.target.value)}
        />
      </div>
      <FilterMedicine
        categories={categories}
        types={types}
        setSelectedType={setSelectedType}
        setSelectedCategory={setSelectedCategory}
        show={show}
        setShow={setShow}
      />
    </div>
  );
};

export default MedicineHeader;
