import { Col, Image, Row, Stack } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Row style={{ height: "30vh" }} className="d-flex align-items-center">
        <Col
          className="d-flex align-items-center justify-content-center"
          md={6}
          sm={12}
        >
          <Stack>
            <Image
              src="src\assets\img\logo_name.png"
              fluid
              style={{ width: "23rem" }}
            />

            <p className="mt-4 ms-2 me-3">
              Connect, Collaborate, and Learn Smarter with AI-Powered Tools.
            </p>
          </Stack>
        </Col>
      </Row>
    </>
  );
}
