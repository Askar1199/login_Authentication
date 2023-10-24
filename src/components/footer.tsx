// import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
const footer = () => {
  return (
    <>
      <footer className="bg-dark text-white">
        <Container>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; React authentic.
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default footer;
