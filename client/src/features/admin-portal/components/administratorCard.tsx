import { Card } from "react-bootstrap";

const AdminCard = () => {
    return ( 
        <Card style={{marginTop:"5%",marginRight:"10%"}}>
        <Card.Body>
            <Card.Title>Rafiqul Islam</Card.Title>
            <Card.Text>
            <div className="d-flex ">
                <div className="w-75">
                <ul>
                <li>EmployeeID: </li>
                <li>Phone Number: </li>
                <li>NID: </li>
                <li>Hospital Name: </li>
                <li>License No.(Private Hospital): </li>
                <li>License Validity(Private Hospital): </li>
                <li>Code(Public Hospital): </li>
                <li>Email: </li>
            </ul>
                </div>
                <div className="float-end">
                    <img src="/hospitalProfilePicture.jpg" className="rounded-circle"/>
                </div>
            </div>
            <button className="btn btn-primary">View Location</button>
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <div className="float-end">
                <button className="btn btn-primary me-2">Approve</button>
                <button className="btn btn-danger">Decline</button>
            </div>
        </Card.Footer>
    </Card> 
    );
}
 
export default AdminCard;