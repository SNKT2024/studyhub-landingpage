// Hero_Section.jsx
import {
  Button,
  Col,
  Form,
  Image,
  InputGroup,
  Row,
  Stack,
} from "react-bootstrap";
import { useState } from "react";
import addEmailToWaitlist from "../functions/signup";
import hero from "../assets/img/image.jpeg";
import SuccessModal from "./SuccesModal";

export default function Hero_Section() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      addEmailToWaitlist(email);
      setEmail("");
      setShowModal(true);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <Row
      style={{ height: "90vh" }}
      className="d-flex align-items-center"
      id="hero"
    >
      <Col
        className="d-flex align-items-center justify-content-center"
        md={6}
        sm={12}
      >
        <Stack gap={2}>
          <h1 className="mb-4" style={{ fontWeight: "700" }}>
            Transform Your Study Sessions with StudyHub
          </h1>
          <h5 className="mb-2">
            Connect, Collaborate, and Learn Smarter with AI-Powered Tools.
          </h5>
          <p className="mb-4">Join the waitlist today!</p>

          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter Your Email"
                aria-label="Email"
                type="email"
                aria-describedby="basic-addon1"
                className="rounded-pill border-primary"
                style={{ width: "100%", height: "3rem" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <Button
              className="btn btn-primary rounded-pill"
              style={{ width: "8rem" }}
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        </Stack>
      </Col>
      <Col
        className="d-flex align-items-center justify-content-center d-none d-sm-block"
        md={6}
        sm={12}
      >
        <Image src={hero} fluid />
      </Col>
      <SuccessModal show={showModal} handleClose={handleClose} />
    </Row>
  );
}
