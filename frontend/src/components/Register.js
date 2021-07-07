import React, { useState } from "react";
import { Container, Form, Col, Card, Row, Button } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function Register() {
  const style = {
    height: "100%",
    textAlign: "center",
    width: "100%",
    padding: "5px",
  };

  const { height, textAlign, width, padding } = style;
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {};

  return (
    <Container style={{ height }}>
      <Card>
        <Card.Header>
          <Card.Title
            style={{ textAlign, color: "blue", fontSize: "1.925rem" }}
          >
            Staffing Logistics
          </Card.Title>
          <Card.Text style={{ textAlign }}>We Count People</Card.Text>
        </Card.Header>

        <Card.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control />
              </Col>
              <Col>
                <Form.Label>Confirm Email</Form.Label>
                <Form.Control />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Password</Form.Label>
                <Form.Control />
              </Col>
              <Col>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control />
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Row>
                <Col>
                  <label>
                    <input type="radio" /> Employer
                  </label>
                </Col>

                <Col>
                  <label>
                    <input type="radio" /> Applicant
                  </label>
                </Col>
              </Form.Row>
              <Form.Text>
                Please select the option that best suits you
              </Form.Text>
            </Form.Group>
            <Form.Row>
              <Button className="float-right" type="submit">
                Submit
              </Button>
            </Form.Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
