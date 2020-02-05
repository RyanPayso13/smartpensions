import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ResourceSelect from "../ResourceSelect/ResourceSelect";
import { Navbar, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar bg="light">
            <Navbar.Brand>Star Wars API Test</Navbar.Brand>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <ResourceSelect />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
