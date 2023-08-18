import './App.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';
import User from './features/user-signup/pages/User';
import Verification from './features/verification/pages/Verification';
import ChangePassword from './features/profile/pages/change-password';
import ProfilePageForCustomers from './features/profile/pages/customer';
import ProfilePageForPharmacy from './features/profile/pages/manager';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/customer/signup" element={<User userType="customer"/>}/>
          <Route path="/manager/signup" element={<User userType="manager"/>}/>
          <Route path="/delivery/signup" element={<User userType="delivery"/>}/>
          <Route path="/verify/:type/:id" element={<Verification/>}/>
          <Route path="/change-password/:type" element={<ChangePassword/>}/>
          <Route path="/customer/profile" element={<ProfilePageForCustomers/>}/>
          <Route path="/pharmacy/profile" element={<ProfilePageForPharmacy/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
