import NavbarAdmin from "../../../partials/navbarAdmin";
import DoctorCard from "../components/doctorCard";

const Admin = () => {
    const doctors=[1,2,3,4,5,6,7,8,9];
    return ( 
        <div>
            <NavbarAdmin/>
            <div style={{marginRight:"5%",marginTop:"7%"}}>
                {doctors.map((doctor)=><DoctorCard/>)}
            </div>
        </div>
     );
}
 
export default Admin;
