import { Container } from "react-bootstrap";
import "./assets/css/style.css";
import Nav_bar from "./component/Nav_bar";
import Hero_Section from "./component/Hero_Section";
import FeaturesList from "./component/Features";
import SignUp_Page from "./component/SignUp";
import Footer from "./component/Footer";
import { analytics } from "./firebaseConfig";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    logEvent(analytics, "notification_received");
  }, []);
  return (
    <>
      <Container>
        <Nav_bar />
        <Hero_Section />
        <FeaturesList />
        <SignUp_Page />
        <Footer />
      </Container>
    </>
  );
}

export default App;
