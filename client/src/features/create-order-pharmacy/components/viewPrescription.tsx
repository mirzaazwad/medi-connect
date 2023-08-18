import { Modal } from 'react-bootstrap';
import ModalProps from '../../../assets/ts/modal';

interface ViewPrescriptionProps extends ModalProps{
  prescriptionName:string;
  uploadDate:Date;
  imageURL:string;
}

const ViewPrescription = ({show,setShow,prescriptionName,uploadDate,imageURL}:ViewPrescriptionProps) => {
  return (
    <Modal show={show} onHide={()=>setShow(false)}>
      <Modal.Header className='prescription-header' closeButton>{prescriptionName}</Modal.Header>
      <Modal.Body>
      <div className='title'>Uploaded On: {uploadDate.toLocaleDateString()}</div>
        <img src={imageURL} width="100%" className='mx-auto'/>
      </Modal.Body>
    </Modal>
  );
};

export default ViewPrescription;