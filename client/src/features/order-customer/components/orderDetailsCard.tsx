import { Card } from "react-bootstrap";

interface OrderCardComponents {
  index: number;
  medicineName: string;
  genericName: string;
  quantityPcs: number|undefined;
  quantityStrips: number|undefined;
  quantityBoxes: number|undefined;
  price: number;
  image: string;
}

const OrderDetailsCard = ({
  index,
  medicineName,
  genericName,
  quantityPcs,
  quantityStrips,
  quantityBoxes,
  price,
  image,
}: OrderCardComponents) => {
  return (
    <Card className="order-card">
      <Card.Header>
        <span className="title">{index+1}. {medicineName}</span>
        <span className="generic-name">({genericName})</span>
      </Card.Header>
      <Card.Body>
        <div className="d-flex mx-auto w-100">
                <table className="table-quantity">
                  <tbody>
                  <tr>
                    <td>Pieces:
                    </td>
                    <td>{quantityPcs}
                    </td>
                  </tr>
                  <tr>
                  <td>Strips:
                    </td>
                    <td>{quantityStrips}
                    </td>
                  </tr>
                  <tr>
                  <td>Boxes:
                    </td>
                    <td>{quantityBoxes}
                    </td>
                  </tr>
                  <tr><button className="custom-button full-width">View Prescription</button></tr>
                  </tbody>
                </table>
          <div className="medicine-image w-25">
            <img src={image} className="medicine-cart-image" />
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="title">
      <span>Price: </span>
      ৳{price}
      </Card.Footer>
    </Card>
  );
};

export default OrderDetailsCard;
