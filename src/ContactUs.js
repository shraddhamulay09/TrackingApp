import react from 'react';
import emailjs from 'emailjs-com';
import {Form,Button, Container,Row , Col,Stack} from 'react-bootstrap';
import { IoLocationSharp,IoCall,IoMail } from "react-icons/io5";
function ContactUs(){

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_uypy0df','template_tmj4xeg',e.target,'6oW-GhF4g4nr2p6ZV').then(res=>{
      alert("Mssage sent! We'll Reach you shortly")
      // window.location.reload();
    }).catch(err=> console.log(err)); 
  }
    return(
        <>
        
        <Container className="contactus_container">
         <Row >
          <Col md={8}>
          <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" name="name"/> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" name="email"/> 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control placeholder="Type your message"  as="textarea" rows={3} name="message" /> 
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
          </Form>
          </Col>

          <Col md={4}>
          <Stack gap={3}>
            <h3>Contact Us</h3>
            <p><IoLocationSharp/>Nal Stop</p>
            <p><IoCall/>98745632102</p>
            <p><IoMail/>Null Stop</p>
          </Stack>
          </Col>
         </Row>
            
         
        </Container>
        </>
    )
}
export default ContactUs;