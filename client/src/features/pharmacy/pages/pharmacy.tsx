import PharmacyPagination from '../components/pharmacy-pagination';
import usePharmacy from '../hooks/usePharmacy';
import NavbarCustomer from '../../../partials/navbarCustomer';
import Loader from '../../../partials/loader';
import '../assets/css/pharmacy.css';
import { IonIcon } from '@ionic/react';
import { searchCircleOutline } from 'ionicons/icons';

const PharmacyPage = () => {
  const {filteredPharmacy,searchTerm,handleSearchTerm,isLoading}=usePharmacy();

  if(!isLoading){
    return (
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
            <PharmacyPagination pharmacies={filteredPharmacy}/>
          </div>
        </section>
      </div>
    );
  }
  else{
    return (
      <Loader/>
    )
  }
};

export default PharmacyPage;