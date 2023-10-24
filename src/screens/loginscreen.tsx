// import React from 'react'
import { Button, Form } from "react-bootstrap";
import "./styles.css";
import FormContainer from "../components/FormContainer";

const loginscreen = () => {
  return (
    <>
      <FormContainer>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default loginscreen;
