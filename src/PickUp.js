import React, { useState } from "react";
import "./css/Form.css";
import "./css/pickupsection.css";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import firebase from "./firebase/app";
const PickUp = () => {
  const navigate = useNavigate();

  const pickup = () => {
    navigate("/pickup_");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getOTP(number) {
    var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        var code = prompt("Enter the otp", "");
        if (code === null) return;
        e.confirm(code)
          .then(function (result) {
            console.log(result.user);
            document.querySelector("label").textContent +=
              result.user.phoneNumber + "Number verified";
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <>
      <Row className="pickupsection">
        <Col md={8}>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            numquam autem. animi possimus, eum sapiente perspiciatis rerum cum
            cumque incidunt laudantium adipisci blanditiis.{" "}
          </h4>
        </Col>
        <Col md={4} className="buttoncol">
          <Button className="pickupbtn" onClick={pickup}>
            Fill the pickup from
          </Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill the form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="contactus_container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="number" id="number" placeholder="Contact" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() => getOTP(document.getElementById("number").value)}
            >
              Get OTP
            </Button>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="number" placeholder="Enter OTP" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill the form</Modal.Title>
        </Modal.Header>
        <Modal.Body className='contactus_container'>
        <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder="Contact" /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Address" /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="date" placeholder="Pick Up Date" /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="number" placeholder="Approx. Weight" /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control placeholder="Descrption of goods"  as="textarea" rows={2}  /> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Destination Address" /> 
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
          </Form>
        </Modal.Body>
        
      </Modal> */}
    </>
  );
};

export default PickUp;
