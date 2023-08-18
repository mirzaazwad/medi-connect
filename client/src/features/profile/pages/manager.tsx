import { useEffect, useState } from 'react';
import ImageInput from '../../../partials/imageInput';
import { useImageUpload } from '../../user-signup/hooks/useImageUpload';
import Loader from '../../../partials/loader';
import '../assets/css/profile.css';
import ProfileFormPharmacy from '../components/manager-form';
import NavbarPharmacy from '../../../partials/navbarPharmacy';

const  ProfilePageForPharmacy = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {imageURL,setImage,upload_image}=useImageUpload("/brokenProfilePicture.jpg");

    if(!isLoading){
      return (     
        <div>
          <NavbarPharmacy/>
          <section>
          <div className="container h-100">
            <div className="pt-5">
          <div className="mt-5 d-lg-none d-flex justify-content-center"><ImageInput imageURL={imageURL} setImage={setImage} upload_image={upload_image}/></div></div>
            <div className="d-flex justify-content-around h-100 mx-auto my-5 w-100" style={{alignItems : 'center'}}>
            <div className="my-3 d-none d-lg-flex"><ImageInput imageURL={imageURL} setImage={setImage} upload_image={upload_image}/></div>
              <div className="profile-form-outer w-50 mt-5">
                <ProfileFormPharmacy/>
              </div>
            </div>
          </div>
          </section>  
          </div>
        );
    }
    else{
      return(
        <Loader/>
      )
    }
  }
   
  export default  ProfilePageForPharmacy;
