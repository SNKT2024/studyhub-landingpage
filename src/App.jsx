import { Container } from "react-bootstrap";
import "./assets/css/style.css";
import Nav_bar from "./component/Nav_bar";
import Hero_Section from "./component/Hero_Section";
import FeaturesList from "./component/Features";
import SignUp_Page from "./component/SignUp";
import Footer from "./component/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Element name="home">
        <Container>
          <Nav_bar />
          <Hero_Section />
          <FeaturesList />
          <SignUp_Page />
          <Footer />
        </Container>
      </Element>
    </>
  );
}

export default App;
