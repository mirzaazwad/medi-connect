import PaginationComponent from "../../../components/pagination";
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
            <PaginationComponent currentPage={1} totalPages={12} handleFirstPageClick={()=>{}} handleNextPageClick={()=>{}} handleLastPageClick={()=>{}} handlePageChange={()=>{}} handlePrevPageClick={()=>{}}/>
        </div>
     );
}
 
export default Admin;
