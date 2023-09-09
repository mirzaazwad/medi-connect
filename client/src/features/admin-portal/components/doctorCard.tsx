import { Card } from "react-bootstrap";

const DoctorCard = () => {
    return ( 
    <Card style={{marginTop:"2%",marginRight:"10%"}}>
        <Card.Body>
            <Card.Title>Dr. Zahida</Card.Title>
            <Card.Text>
            <div className="d-flex ">
                <div className="w-75">
                <ul>
                <li>BM&DC Number: </li>
                <li>Phone Number: </li>
                <li>NID: </li>
                <li>MBBS from: </li>
                <li>MBBS batch: </li>
                <li>MD from: </li>
                <li>Currently Practicing In: </li>
                <li>Email: </li>
            </ul>
                </div>
                <div className="float-end">
                    <img src="/doctorProfilePicture.jpg" className="rounded-circle"/>
                </div>
            </div>
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <div className="float-end">
                <button className="btn btn-primary">Approve</button>
                <button className="btn btn-danger">Decline</button>
            </div>
            <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card> 
    );
}
 
export default DoctorCard;