import { Form } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";

export default function ApplicationFormPageOne() {
  const { register, handleSubmit } = useForm();

  const submitFormValues = (event, data) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={() => handleSubmit(submitFormValues)}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                {...register("firstname", {
                  required: "Please enter a first name",
                })}
              />
            </div>
          </div>
          {
            // end of the col
          }

          <div className="col-6">
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                {...register("lastname", {
                  required: "Please enter a last name",
                })}
              />
            </div>
          </div>
        </div>
        {
          // ends first row
        }
        <button type="submit" name="submitbutton">
          Submit
        </button>
      </form>
    </div>
  );
}
