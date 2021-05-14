import { Form } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";

export default function JobSearchForm({ address }) {
  const { register, handleSubmit } = useForm();

  const submitFormValues = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={() => handleSubmit(submitFormValues)}>
        <div></div>
      </form>
    </div>
  );
}
