import { Form } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";

export default function JobSearchForm({ address }) {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Form className="add-quarter-height">
        <div>
          <Form.Control
            className="left-corner"
            as="input"
            type="text"
            placeholder="Enter Job, Skill, Keywords or Company Name"
          />
          <Form.Control
            className="left-corner"
            as="input"
            type="text"
            placeholder="Location"
            defaultValue={address}
          />
          <Form.Control
            className="left-corner"
            as="select"
            placeholder="Category"
          >
            <option selected hidden disabled>
              Select a Category
            </option>
            <option>option 1</option>
          </Form.Control>
        </div>
      </Form>
    </div>
  );
}
