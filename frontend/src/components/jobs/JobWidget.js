import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import "./css/JobWidget.css";

export default function JobWidget({
  compensationInfo,
  companyDisplayNames,
  addresses,
  employmentTypes,
  description,
  postingPublishedTime,
  postingExpireTime,
  department,
  title,
  logo,
  requisitionId,
}) {
  return (
    <Card className="paddingCard m-b-1875">
      <Row>
        <Col md={6}>
          <div
            className="float-left"
            style={{ minWidth: 72, minHeight: 72, maxHeight: 72, maxWidth: 72 }}
          >
            <AiIcons.AiFillCode size={60} title="yo" className="float-left" />
          </div>
          <Card.Title className="float-left">{title}</Card.Title>
          <h4>{companyDisplayNames && companyDisplayNames.join(",")}</h4>
        </Col>
        <Col md={6}></Col>
      </Row>
      <Row>
        <Col md={7}>
          <ul
            style={{ paddingLeft: "0", listStyle: "none" }}
            className="d-flex"
          ></ul>
        </Col>
        <Col md={5}>
          <div>
            <Button className="float-left m-r-125" variant="success">
              Apply
            </Button>
            <Button className="float-left m-r-125" variant="primary">
              View Details
            </Button>
            <Button
              className="float-left m-r-125"
              variant="primary"
              href={`/dashboard/jobs/${requisitionId}`}
            >
              Edit
            </Button>
            <Button className="float-left m-r-125" variant="danger">
              Delete
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
