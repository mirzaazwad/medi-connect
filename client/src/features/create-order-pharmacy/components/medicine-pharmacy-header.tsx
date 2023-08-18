import { faCartShopping, faFilter, faPrescription } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonIcon } from "@ionic/react";
import { searchCircleOutline } from "ionicons/icons";
import FilterMedicine from "./filter-medicine";
import Category from "../../../assets/ts/medicine-category";
import Type from "../../../assets/ts/medicine-type";
import { useState } from "react";
import Cart from "./cart";
import ViewPrescription from "../../prescription-based-order/components/viewPrescription";

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
  const [showCart,setShowCart] = useState(false);
  const [showPrescription,setShowPrescription] = useState(false);
  return (
    <div className="w-100">
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
    <div className="w-100 button-component">
      <Cart show={showCart} setShow={setShowCart}/>
      <ViewPrescription prescriptionName="Azwad's Prescription" uploadDate={new Date()} imageURL="/brokenProfilePicture.jpg" show={showPrescription} setShow={setShowPrescription}/>
      <div className="w-75 mx-auto d-flex">
        <div className="w-50 buttons">
        <button className="custom-button full-width" onClick={()=>setShowCart(true)}><span className="prescription-medicine-props">View</span> <span className="prescription-medicine-names">Cart</span> <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
        </div>
        <div className="w-50 buttons">
        <button className="custom-button full-width" onClick={()=>setShowPrescription(true)}><span className="prescription-medicine-props">View</span> <span className="prescription-medicine-names">Prescription</span> <FontAwesomeIcon icon={faPrescription}></FontAwesomeIcon></button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MedicineHeader;
