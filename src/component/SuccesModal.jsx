import { Button, Modal } from "react-bootstrap";

export default function SuccessModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Amazing!</Modal.Title>
      </Modal.Header>
      <Modal.Body>You have been added to the waitlist.</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
