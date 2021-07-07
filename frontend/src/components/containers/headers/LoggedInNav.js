import React from "react";
import { Navbar, Row, NavDropdown, Nav, Col, Container } from "react-bootstrap";

const LoggedInNav = () => {
  return (
    <Navbar bg="light" expand="xl">
      <Container fluid>
        <Row style={{ width: "100%" }}>
          <Col sm>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>
          <Navbar.Collapse id="basic-navbar-nav" style={{ float: "left" }}>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
};

export default LoggedInNav;
