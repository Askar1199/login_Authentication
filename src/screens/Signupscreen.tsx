// import React from 'react'
import { Button, Form } from "react-bootstrap";
import "./styles.css";
import FormContainer from "../components/FormContainer";
import { NavLink } from "react-router-dom";

const Signupscreen = () => {
  return (
    <>
      <div className="cont">
        <div className="flexcot ">
          <FormContainer>
            <div className=" p-3 formBox">
              <h2 className="text-center text-info">SignUp Page</h2>
              <Form>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label className="text-light">Firstname</Form.Label>
                  <Form.Control
                    type="firstname"
                    placeholder="Enter your firstname"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Lastname">
                  <Form.Label className="text-light">Lastname</Form.Label>
                  <Form.Control
                    type="lastname"
                    placeholder="Enter your lastname"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="text-light">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Password">
                  <Form.Label className="text-light">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 buttonS"
                >
                  Create Account
                </Button>

                <p className="mt-3 text-secondary">
                  Already have an account? <NavLink to="/login">login</NavLink>
                </p>
              </Form>
            </div>
          </FormContainer>
        </div>
      </div>
    </>
  );
};

export default Signupscreen;
