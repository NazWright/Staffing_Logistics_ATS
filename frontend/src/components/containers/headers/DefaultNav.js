import React from "react";
import { Navbar, Col, Row } from "react-bootstrap";
import logo from "../../../assets/cropped-Staffing-Logistics-1.png";

const DefaultNav = () => {
  return (
    <Row>
      <Col sm>
        <Navbar.Brand href="#home">
          {" "}
          <img src={logo} height={80} width={150} />
        </Navbar.Brand>
      </Col>
    </Row>
  );
};

export default DefaultNav;
