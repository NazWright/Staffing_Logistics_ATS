import { Form } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";

export default function JobSearchForm({ address }) {
  const { register, handleSubmit } = useForm();
  console.log(address);
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
            defaultValue={address && address.label ? address.label : null}
          />
          <Form.Control
            className="left-corner"
            as="select"
            placeholder="Category"
            defaultValue="null"
          >
            <option hidden disabled value="null">
              Select a Category
            </option>
            <option>option 1</option>
          </Form.Control>
        </div>
      </Form>
    </div>
  );
}
