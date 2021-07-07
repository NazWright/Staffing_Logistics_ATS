import React from "react";
import { Navbar, Col, Row, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../../../assets/cropped-Staffing-Logistics-1.png";

const DefaultNav = () => {
  // get the screen size from redux
  const linkClasses = "d-flex justify-content-center";

  return (
    <Navbar>
      <Container fluid>
        <Row style={{ width: "100%", alignItems: "center" }}>
          <Col xs={4}>
            <Navbar.Brand href="/">
              {" "}
              <img src={logo} height={80} width={150} />
            </Navbar.Brand>
          </Col>

          <Col xs={8}>
            <Nav className="me-auto">
              <Nav.Link href="#features">About Us</Nav.Link>
              <Nav.Link href="#pricing">Jobs</Nav.Link>
              <Nav.Link href="#pricing">For Employers</Nav.Link>
              <Nav.Link href="#pricing">For Candidates</Nav.Link>
              <Nav.Link href="#pricing">Staffing Services</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>
              <Nav.Link href="#pricing">Resources</Nav.Link>
              <Nav.Item>
                <div>
                  <div>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                  </div>
                  <div>
                    <Nav.Link href="#pricing">Sign Up</Nav.Link>
                  </div>
                </div>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default DefaultNav;
