import './App.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';
import User from './features/user-signup/pages/User';
import Verification from './features/verification/pages/Verification';
import ChangePassword from './features/profile/pages/change-password';
import ProfilePageForCustomers from './features/profile/pages/customer';
import ProfilePageForDelivery from './features/profile/pages/delivery';
import ProfilePageForPharmacy from './features/profile/pages/manager';
import PharmacyPage from './features/pharmacy/pages/pharmacy';
import PharmacyMedicines from './features/pharmacy/pages/medicines';
import Inventory from './features/inventory/pages/inventory';
import ChatPharmacy from './features/chat-pharmacy/components/chatPage';
import MyOrders from './features/order-customer/pages/myOrders';
import Orders from './features/order-pharmacy/pages/orders';
import Prescription from './features/prescription-based-order/pages/prescription';
import OrderByPrescription from './features/pharmacy/pages/orderByPrescription';
import MedicinesPrescription from './features/create-order-pharmacy/pages/medicines';
import DeliveryHistory from './features/delivery-history/pages/history';
import OngoingDelivery from './features/delivery-ongoing/pages/ongoing';
import DashboardDelivery from './features/delivery-tracker/pages/dashboard';
import ChatDelivery from './features/chat-delivery/components/chatPage';

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
          <Route path="/delivery/profile" element={<ProfilePageForDelivery/>}/>
          <Route path="/pharmacy/profile" element={<ProfilePageForPharmacy/>}/>
          <Route path="/customer/pharmacy" element={<PharmacyPage/>}/>
          <Route path="/customer/pharmacy/medicine/:id" element={<PharmacyMedicines/>}/>
          <Route path="/pharmacy/inventory" element={<Inventory/>}/>
          <Route path="/pharmacy/chat" element={<ChatPharmacy/>}/>
          <Route path="/customer/order" element={<MyOrders/>}/>
          <Route path="/customer/order/prescription/:id" element={<OrderByPrescription/>}/>
          <Route path="/pharmacy/order" element={<Orders/>}/>
          <Route path="/pharmacy/order/prescription/:id" element={<MedicinesPrescription/>}/>
          <Route path="/customer/prescription" element={<Prescription/>}/>
          <Route path="/delivery/history" element={<DeliveryHistory/>}/>
          <Route path="/delivery/ongoing" element={<OngoingDelivery/>}/>
          <Route path="/delivery/request" element={<DashboardDelivery/>}/>
          <Route path="/delivery/chat" element={<ChatDelivery/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
