import { Container, Nav, Navbar, Image, Button } from "react-bootstrap";
import { Link } from "react-scroll";
export default function Nav_bar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
    >
      <Container style={{ minHeight: "5rem" }} fluid>
        <Link to="home">
          <Navbar.Brand href="#home">
            <Image
              src="src\assets\img\logo_name.png"
              className="img-fluid"
              style={{ width: "180px" }}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="hero" smooth duration={100}>
              <Nav.Link href="" className="me-3">
                Home
              </Nav.Link>
            </Link>
            <Link to="feature">
              <Nav.Link href="" className="me-3">
                Features
              </Nav.Link>
            </Link>
            <Link to="signup">
              <Button style={{ width: "6rem" }} className="rounded-pill">
                Join
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
