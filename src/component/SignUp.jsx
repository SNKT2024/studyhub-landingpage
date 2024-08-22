import { useState } from "react";
import { Button, Col, Form, InputGroup, Row, Stack } from "react-bootstrap";
import addEmailToWaitlist from "../functions/signup";
import { Element } from "react-scroll";
import SuccessModal from "./succesModal";

export default function SignUp_Page() {
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
    <Element name="signup">
      <Row style={{ height: "70vh" }} className="">
        <Col
          className="d-flex align-items-center justify-content-center mx-auto"
          md={6}
          sm={12}
          style={{ width: "50vw" }}
        >
          <Stack
            gap={2}
            className="d-flex align-items-center justify-content-center mx-auto"
          >
            <h1 style={{ fontWeight: "700", fontSize: "50px" }}>
              Be the First to Elevate Your Learning
            </h1>
            <p style={{ fontWeight: "300", fontSize: "2rem" }}>
              Join the StudyHub Waitlist Today!
            </p>
            <Form
              onSubmit={handleSubmit}
              className="d-flex align-items-center justify-content-center mx-auto flex-column"
              style={{ width: "100%" }}
            >
              <InputGroup className="mb-3" style={{ width: "100%" }}>
                <Form.Control
                  placeholder="Enter Your Email"
                  aria-label="Email"
                  type="email"
                  aria-describedby="basic-addon1"
                  className="border border-primary rounded-pill"
                  style={{ width: "100%", height: "3rem" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              <Button
                className="btn btn-primary rounded-pill"
                style={{ width: "13rem", height: "3rem" }}
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Stack>
        </Col>
        <SuccessModal show={showModal} handleClose={handleClose} />
      </Row>
    </Element>
  );
}
