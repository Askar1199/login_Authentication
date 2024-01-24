// import React from 'react'
import { Button, Form } from "react-bootstrap";
import "./styles.css";
import FormContainer from "../components/FormContainer";

const loginscreen = () => {
  return (
    <>
      <div className="cont">
        <FormContainer>
          <div className="formBox p-3">
            <h2 className="text-center text-info">Login Page</h2>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Password">
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit" className="buttonS">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </FormContainer>
      </div>
    </>
  );
};

export default loginscreen;
