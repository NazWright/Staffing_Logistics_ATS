import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Dropdown } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  function submitHandler(data) {
    axios
      .post("/api/signup", data)
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <hr></hr>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            as="input"
            {...register("givenName")}
            placeholder="First Name"
          />
        </div>
        <div>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            as="input"
            {...register("familyName")}
            placeholder="Last Name"
          />
        </div>
        <div>
          Purpose For Using Software
          <ul className="list-group">
            <li className="list-group-item">
              <Form.Label>I am looking for job openings</Form.Label>
              <Form.Control
                as="input"
                type="radio"
                {...register("role")}
                value="Applicant"
              />
            </li>
            <li className="list-group-item">
              <div>
                <Form.Control
                  as="input"
                  type="radio"
                  {...register("role")}
                  value="Employer-Admin"
                />
                <Form.Label>
                  I am an Employer looking for a staffing solution.
                </Form.Label>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <Form.Label>Email</Form.Label>
          <Form.Control as="input" {...register("email")} placeholder="Email" />
        </div>
        <div>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="input"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
        <div>
          <p>
            Already a member? <a href="/login">Login</a>
          </p>
        </div>
      </Form>
    </div>
  );
}
