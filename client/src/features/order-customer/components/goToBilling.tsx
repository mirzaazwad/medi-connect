import { Modal } from "react-bootstrap";
import ModalProps from "../../../assets/ts/modal";
import { IonIcon } from "@ionic/react";
import { cashOutline, mailUnreadOutline, personCircleOutline } from "ionicons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faCreditCard, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useAddBilling } from "../hooks/useAddBilling";
import { useMap } from "../../maps/hooks/useMap";
import AddressInputPhone from "../../maps/components/address-input-mobile";

const GoToBillingModal = ({show,setShow}:ModalProps) => {
  const {fullname,email,phone,setFullname,setEmail,setPhone,setAddress,paymentOption,setPaymentOption,handleSubmit}=useAddBilling();
  const { address, location, placesAutoComplete } = useMap();
  return ( 
  <Modal show={show} onHide={()=>setShow(false)}>
    <Modal.Header className="modal-header-order" closeButton>Billing Details</Modal.Header>
    <form onSubmit={handleSubmit}>
    <Modal.Body>
      <div className="inputbox">
        <IonIcon icon={personCircleOutline}></IonIcon>
        <input type="text" id="fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)} required/>
        <label htmlFor="fullname">Full Name</label>
      </div>
      <div className="inputbox">
        <IonIcon icon={mailUnreadOutline}></IonIcon>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <label htmlFor="email">Email</label>
      </div>
      <div className="inputbox">
        <FontAwesomeIcon icon={faPhone} className="custom-icon"></FontAwesomeIcon>
        <input type="text" id="phone" pattern="[01]{2}[3-9]{1}[0-9]{8}" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
        <label htmlFor="phone">Phone</label>
      </div>
      <div className="w-100">
        <AddressInputPhone address={address} location={location} placesAutoComplete={placesAutoComplete} disabled={false}/>
      </div>
      <div className="w-100 d-flex">
        <div className="title w-25">Payment Method: </div>
        <div className="w-75 d-flex">
        <div className="w-50">
        <button type="button" className={`custom-button full-width ${paymentOption==='cash'?'selected-button':''}`} onClick={()=>setPaymentOption('cash')}><IonIcon icon={cashOutline} className="icon-margin"></IonIcon>Cash</button>
        </div>
        <div className="w-50">
        <button type="button" className={`custom-button full-width ${paymentOption==='digital'?'selected-button':''}`} onClick={()=>setPaymentOption('digital')}><FontAwesomeIcon icon={faCreditCard} className="icon-margin"></FontAwesomeIcon>Digital</button>
        </div>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer className="w-100"><button className="custom-button full-width" type="submit">Confirm Billing Details</button></Modal.Footer>
    </form>
  </Modal> 
  );
}
 
export default GoToBillingModal;