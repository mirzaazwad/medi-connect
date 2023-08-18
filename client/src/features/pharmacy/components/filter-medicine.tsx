import { Accordion, Modal } from "react-bootstrap";
import Type from "../../../assets/ts/medicine-type";
import Category from "../../../assets/ts/medicine-category";

interface FilterMedicineProps {
  types: Type[] | undefined;
  categories: Category[] | undefined;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category[]>>;
  setSelectedType: React.Dispatch<React.SetStateAction<Type[]>>;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterMedicine = ({
  types,
  categories,
  setSelectedCategory,
  setSelectedType,
  show,
  setShow,
}: FilterMedicineProps) => {
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const categoryName = event.target.nextSibling?.textContent;
    if (categoryName) {
      setSelectedCategory((prevSelected: Category[]) => {
        if (
          prevSelected.some((category) => category.category === categoryName)
        ) {
          return prevSelected.filter(
            (category) => category.category !== categoryName
          );
        } else {
          const selectedCategory = categories?.find(
            (category) => category.category === categoryName
          );
          return selectedCategory
            ? [...prevSelected, selectedCategory]
            : prevSelected;
        }
      });
    }
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typeName = event.target.nextSibling?.textContent;
    if (typeName) {
      setSelectedType((prevSelected: Type[]) => {
        if (prevSelected.some((type) => type.Name === typeName)) {
          return prevSelected.filter((type) => type.Name !== typeName);
        } else {
          const selectedType = types?.find((type) => type.Name === typeName);
          return selectedType ? [...prevSelected, selectedType] : prevSelected;
        }
      });
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton className="header-color-modal">Filter Options</Modal.Header>
      <Modal.Body>
        <div className="filter-options">
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Category</Accordion.Header>
              <Accordion.Body>
                {categories &&
                  categories.map((category) => (
                    <div key={category.category}>
                      <input
                        type="checkbox"
                        key={category.category}
                        onChange={handleCategoryChange}
                      />
                      <label htmlFor={category._id}>{category.category}</label>
                    </div>
                  ))}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Type</Accordion.Header>
              <Accordion.Body>
                {types &&
                  types.map((type) => (
                    <div key={type._id}>
                      <input
                        type="checkbox"
                        onChange={handleTypeChange}
                        id={type._id}
                      />
                      <label htmlFor={type._id}>{type.Name}</label>
                    </div>
                  ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FilterMedicine;
