import CustomerSignUp from "../components/customerSignUp";
import '../assets/css/user.css';
import ManagerSignUp from "../components/managerSignUp";
import DeliverySignUp from "../components/deliverySignUp";

interface UserProps{
  userType:string;
}

const User = ({userType}:UserProps) => {
  return ( 
    <div className="user">
      {(userType==="customer") && (<CustomerSignUp/>)}
      {(userType==="manager") && (<ManagerSignUp/>)}
      {(userType==="delivery") && (<DeliverySignUp/>)}
    </div>
   );
}
 
export default User;