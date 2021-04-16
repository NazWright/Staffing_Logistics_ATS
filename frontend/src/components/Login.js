import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  function submitHandler(data) {
    axios.post("/api/login", data);
  }

  return (
    <div>
      <h1>Login</h1>
      <hr></hr>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <Form.Label>Email</Form.Label>
          <Form.Control as="input" {...register("Email")} placeholder="Email" />
        </div>
        <div>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="input"
            type="password"
            placeholder="Password"
            {...register("Password")}
          />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
        <div>
          <p>
            Not a member? <a href="/signup">Register</a>
          </p>
        </div>
        <div>
          <p>
            <a href="/auth/google">Login with Google</a>
          </p>
        </div>
      </Form>
    </div>
  );
}
