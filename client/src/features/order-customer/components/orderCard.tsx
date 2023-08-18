import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {useState} from 'react';
import {orders} from '../../../assets/ts/order';
import { useOrderCard } from '../hooks/useOrderCard';
import { IonIcon } from '@ionic/react';
import { calendarNumberOutline } from 'ionicons/icons';
import OrderDetails from './orderDetails';
import GoToBillingModal from './goToBilling';

interface OrderCardProps{
  order:orders;
}

const OrderCard = ({ order }:OrderCardProps) => {
  const {status,totalPrice,statusColor}=useOrderCard(order.status,order.paymentStatus,order.orderMedicines);
  const [showDetails,setShowDetails]=useState<boolean>(false);
  const [showBilling,setShowBilling]=useState<boolean>(false);
  return (
    
        <Card className='order-card mb-3'>
          <Card.Header className='order-card-header'>
            Order ID: {order._id}
          </Card.Header>
          <OrderDetails show={showDetails} setShow={setShowDetails} order={order}/>
          <GoToBillingModal show={showBilling} setShow={setShowBilling}></GoToBillingModal>
          <Card.Body>
            <Card.Text>
              <div className='d-flex justify-content-between'>
                <div>
                  <p>
                    <IonIcon icon={calendarNumberOutline}></IonIcon> {new Date(order.date).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p>Total Price: ৳{totalPrice} </p>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="w-100">
            <small className="text-muted">
              Status: <Badge bg={statusColor}>{status}</Badge>
            </small>
            </div>
            <div className="custom-button-width d-flex float-end">
            <div className={`${status==='Approved'?'w-50':'w-100'}`}>
            <button className="custom-button full-width mx-2" onClick={()=>setShowDetails(true)}>
              View details
            </button>
            </div>
           
            {status === 'Approved' && (
            <div className="w-50">
              <button className="custom-button full-width mx-2" onClick={()=>setShowBilling(true)}>
              Go to billing
            </button>
            </div>
          )}
            </div>
          </Card.Footer>
        </Card>
      
  );
};

export default OrderCard;