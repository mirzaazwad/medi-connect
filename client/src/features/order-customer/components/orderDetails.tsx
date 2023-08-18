import { Badge, Modal, ProgressBar } from "react-bootstrap";
import { orders } from "../../../assets/ts/order";
import ModalProps from "../../../assets/ts/modal";
import { useOrderDetails } from "../hooks/useOrderDetails";
import '../assets/css/order-details.css';
import OrderDetailsCard from "./orderDetailsCard";
import BillingDetails from "./billingDetails";
import DeliveryDetails from "./deliveryDetails";
import PrescriptionCard from "./prescriptionCard";


interface OrderModalProps extends ModalProps{
  order:orders;
}

const OrderDetails = ({show,setShow,order}:OrderModalProps) => {
  const {progress,status,totalPrice,statusColor}=useOrderDetails(order.status,order.paymentStatus,order.orderMedicines);

  return ( 
  <Modal show={show} onHide={()=>setShow(false)}>
    <Modal.Header className="modal-header-order" closeButton>Order Details</Modal.Header>
    <Modal.Body className="order-modal w-100">
      <div className="current-status">
        <ProgressBar now={progress} label={`${progress}%`} variant={statusColor}/>
        <small className="text-muted">
            Status: <Badge bg={statusColor}>{status}</Badge>
          </small>
      </div>
      {order.status!=="Pending" && order.status!=="Approved" && (<BillingDetails fullname={order.customerInformation?.fullname} email={order.customerInformation?.email} phone={order.customerInformation?.phone} address={order.customerInformation?.address}></BillingDetails>)}
      {(order.status==="Delivering" || order.status==="Delivered"|| order.status==="Completed") && (<DeliveryDetails username={order.deliveryInformation?.username} email={order.deliveryInformation?.email} phone={order.deliveryInformation?.phone} imageURL={order.deliveryInformation?.imageURL}></DeliveryDetails>)}
      <div className="order-details-title">
      {order.orderMedicines===undefined && ("Prescription Based Order")}
      {order.prescriptionOrder===undefined && ("Medicines Ordered")}

      </div>
      {order.orderMedicines!==undefined && order.orderMedicines.map((order,index)=>(
        <OrderDetailsCard index={index} medicineName={order.medicineName} genericName={order.genericName} quantityPcs={order.amount?.quantityPcs} quantityBoxes={order.amount?.quantityBoxes} quantityStrips={order.amount?.quantityStrips} price={order.price} image={order.imageURL}/>
      ))}
      {!order.orderMedicines && order.prescriptionOrder && (<PrescriptionCard _id={order.prescriptionOrder._id} prescriptionName={order.prescriptionOrder.prescriptionName} uploadDate={order.prescriptionOrder.uploadDate} image={order.prescriptionOrder.imageURL}/>)}
    </Modal.Body>
    <Modal.Footer className="w-75 justify-content-center mx-auto">
    <div className="price">Total: {totalPrice===0?"Not Assigned":"৳"+totalPrice.toString()}</div>
    {order.status==="Delivering" && (
      <button className="custom-button full-width">Confirm Order Received</button>
    )}
    {(order.status==="Pending" || order.status==="Approved") && (
      <button className="custom-button full-width">Cancel Order</button>
    )}
    </Modal.Footer>
  </Modal> );
}
 
export default OrderDetails;