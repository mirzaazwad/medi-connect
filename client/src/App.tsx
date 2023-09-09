import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';
import Verification from './features/verification/pages/Verification';
import ChangePassword from './features/profile/pages/change-password';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Patient from './features/user-signup/pages/Patient';
import Doctor from './features/user-signup/pages/Doctor';
import Hospital from './features/user-signup/pages/Hospital';
import ProfilePageForPatients from './features/profile/pages/patient';
import ProfilePageForDoctor from './features/profile/pages/doctor';
import ProfilePageForHospital from './features/profile/pages/hospital';
import AdminDoctor from './features/admin-portal/pages/AdminDoctor';
import AdminAdministrator from './features/admin-portal/pages/AdminAdministrator';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AdminPortal from './features/admin-portal/pages/AdminPortal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/patient/signup" element={<Patient/>}/>
          <Route path="/doctor/signup/1" element={<Doctor/>}/>
          <Route path="/hospital/signup/1" element={<Hospital/>}/> 
          <Route path="/verify/:type/:id" element={<Verification/>}/>
          <Route path="/change-password/:type" element={<ChangePassword/>}/>
          <Route path="/patient/profile" element={<ProfilePageForPatients/>}/>
          <Route path="/doctor/profile" element={<ProfilePageForDoctor/>}/>
          <Route path="/hospital/profile" element={<ProfilePageForHospital/>}/>
          <Route path="/admin/doctor" element={<AdminDoctor/>}/>
          <Route path="/admin/administrator" element={<AdminAdministrator/>}/>
          <Route path="/admin/portal" element={<AdminPortal/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
