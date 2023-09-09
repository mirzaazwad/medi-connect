import NavbarAdmin from "../../../partials/navbarAdmin";
import AdminCard from "../components/administratorCard";

const AdminAdministrator = () => {
    const admins=[1,2,3,4,5,6,7,8,9];
    return ( 
        <div>
            <NavbarAdmin/>
            <div style={{marginRight:"5%",marginTop:"7%"}}>
                {admins.map((admin)=><AdminCard/>)}
            </div>
        </div>
     );
}
 
export default AdminAdministrator;