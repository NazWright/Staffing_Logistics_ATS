import React from "react";
import { Container, Form, Col, Card, Row, Button } from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import { useForm } from "react-hook-form";
import { login, selectAuth } from "../redux/app/features/ auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Redirect } from "react-router-dom";

export default function Authentication() {
  const history = useHistory();
  const location = useLocation();
  const auth = useSelector(selectAuth).auth;

  const style = {
    height: "100%",
    textAlign: "center",
    width: "100%",
    padding: "5px",
  };

  const { height, textAlign, width, padding } = style;
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("data", data);
    dispatch(login(data));
    history.push("/dashboard");
  };

  return !auth ? (
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
          <Row>
            <Col md={6}>
              <div style={{ padding }}>
                <Button
                  style={{ width, backgroundColor: "white", color: "black" }}
                  href="/auth/google"
                >
                  <FcIcons.FcGoogle size={30} />
                  Continue with Google
                </Button>
              </div>
              <div style={{ padding }}>
                <Button
                  style={{ width, backgroundColor: "white", color: "black" }}
                  href="/auth/facebook"
                >
                  <AiIcons.AiFillFacebook color="blue" size={30} />
                  Continue with Facebook
                </Button>
              </div>
              <div style={{ padding: "5px 5px 5px 0px", textAlign }}>
                <a>Sign up with email</a>
              </div>

              <hr />

              <Card.Text>
                By continuing you indicate that you agree with Staffing
                Logistic's <a>Terms of Service</a> and <a>Privacy Policy</a>
              </Card.Text>
            </Col>

            <Col md={6}>
              <h4>Login</h4>
              <hr />
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Email Address"
                    {...register("email")}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    {...register("password")}
                  />
                </Form.Group>
                <Form.Row>
                  <Col>
                    <a>Forgot password?</a>
                  </Col>
                  <Col>
                    <Button
                      type="submit"
                      style={{ float: "right", borderRadius: "20px" }}
                    >
                      Login
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  ) : (
    <Redirect
      to={{
        pathname: "/dashboard",
        state: { from: location.pathname },
      }}
    />
  );
}
