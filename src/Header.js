import react from "react";
import NewForm from "./NewForm";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Button,
  Container,
  Nav,
  NavDropdown,
  Form,
} from "react-bootstrap";
import AboutUs from "./AboutUs";
import App from "./App";
import ContactUs from "./ContactUs";
import PickUp from "./PickUp";
import SearchTrackId from "./SearchTrachId";
import { Link } from "react-scroll";
import Slider from "./Slider";
import "./css/Header.css";
function Header() {
  const searchtrackid = useRef(null);
  const pickup = useRef(null);
  const contact = useRef(null);
  const aboutus = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 70,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#">Anu di project</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link onClick={() => scrollDown(pickup)}>Pick Up</Nav.Link>
                <Nav.Link onClick={() => scrollDown(contact)}>
                  Contact Us
                </Nav.Link>
                <Nav.Link onClick={() => scrollDown(aboutus)}>
                  About Us
                </Nav.Link>
                {/* <Nav.Link as={Link} to={"/pickup"}>
                  Pick Up
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>
                  Contact Us
                </Nav.Link> */}
              </Nav>
              <Button
                className="trackbtn"
                onClick={() => scrollDown(searchtrackid)}
              >
                <span>Track Order</span>
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Slider />

        <div className="searchtrackid" ref={searchtrackid}>
          <SearchTrackId />
        </div>
        <div className="pickup" ref={pickup}>
          <PickUp />
        </div>

        <div className="contact" ref={contact}>
          <ContactUs />
        </div>
        <div className="aboutus" ref={aboutus}>
          <AboutUs />
        </div>

        {/* <section id="serachtrackid">
          <SearchTrackId />
        </section>
        <section id="pickup">
          <PickUpForm />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
        <section id="aboutus">
          <AboutUs />
        </section> */}
        {/* <Routes>
          <Route path="/home" element={<App />} />
          <Route path="/track" element={<SearchTrackId />} />
          <Route path="/pickup" element={<PickUpForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes> */}
      </div>
    </>
  );
}

export default Header;
