// import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

interface props {
  children: React.ReactNode;
}

const FormContainer = ({ children }: props) => {
  return (
    <>
      <Container className="py-3">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormContainer;
