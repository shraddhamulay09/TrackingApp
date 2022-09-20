import React, { useState, useMemo } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function NewForm() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <Container className="contactus_container">
      <Form>
        <Form.Group className="mb-3">
          Sender Details
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          Sender Address
          <Form.Control type="textarea" placeholder="Street 1" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Street 2" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="City" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="State" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Postal Code" />
        </Form.Group>
        <Form.Group>
          <Select options={options} value={value} onChange={changeHandler} />
        </Form.Group>

        <Form.Group className="mb-3">
          Receivers Details
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3">
          Receivers Address
          <Form.Control type="textarea" placeholder="Street 1" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Street 2" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="City" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="State" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Postal Code" />
        </Form.Group>
        <Form.Group>
          <Select options={options} value={value} onChange={changeHandler} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
