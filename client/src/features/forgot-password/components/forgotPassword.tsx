import Card from 'react-bootstrap/Card';
import ForgotPasswordSendEmail from './forgotPasswordSendEmail';
const ForgotPassword = () => {
    return ( 
      <div className='landing'>
            <section className='d-flex justify-content-center'>
            <Card className='forgotPasswordCard'>
        <Card.Header className='' style={{textAlign: "center", fontSize: "20px"}}><b>Forgot Password</b></Card.Header>
        <Card.Body>
        
        <ForgotPasswordSendEmail/>
        </Card.Body>
      </Card>
      </section>
    </div>   
     );
}
 
export default ForgotPassword;