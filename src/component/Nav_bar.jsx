import { Container, Nav, Navbar, Image, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../assets/img/logo_name.png";

export default function Nav_bar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      id="home"
    >
      <Container style={{ minHeight: "5rem" }} fluid>
        <Navbar.Brand href="#home">
          <Image src={logo} className="img-fluid" style={{ width: "180px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero" className="me-3">
              Home
            </Nav.Link>

            <Nav.Link href="#features" className="me-3">
              Features
            </Nav.Link>

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
