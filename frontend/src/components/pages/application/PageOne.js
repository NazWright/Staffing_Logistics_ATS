import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changePreferences } from "../../../redux/app/features/application/applicationSlice";
import { useForm } from "react-hook-form";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { employmentCheckBoxes } from "./data/checkboxesData";
import CheckBox from "../../uiElements/CheckBox";
import CheckBoxGroup from "../../uiElements/CheckBoxGroup";

export default function PageOne() {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const [checkBoxValues, setcheckBoxValues] = useState(["hello"]);
  const jobPreferences = useSelector((state) => state.jobPreferences);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    // set the values of our checkbox state to the value of the emp_type
    history.push("/application/page_two");
  };

  const [empTypeCheckboxes, setEmpTypeCheckBoxes] =
    useState(employmentCheckBoxes);

  // If you have more than one checkbox group to use
  // create a map: [registerName]: [function to update part of the state]
  const checkBoxMap = {
    emp_type: setEmpTypeCheckBoxes,
  };

  const handleCheckBoxGroupChange = (
    updatedGroupState,
    registerName,
    registerValues
  ) => {
    if (registerName && registerValues) {
      var stateFunction = checkBoxMap[registerName];
      stateFunction(updatedGroupState);
      setValue(registerName, registerValues);
    }
  };

  /*         {checkboxes.map((child, index) => {
            return (
              <span key={index}>
                &nbsp;
                <label>
                  <input
                    type="checkbox"
                    name={child.name}
                    value={child.value}
                    className="checkbox"
                    checked={child.checked || false}
                    onChange={(event) =>
                      checkboxOnChange(event.target.checked, index, "emp_type")
                    }
                  />
                  {child.label}
                </label>
              </span>
            );
          })} */

  /* const checkBoxGroupChange = (isChecked, registerName) => {
    const newCheckState = checkboxes.map((aCheckbox) => ({
      ...aCheckbox,
      checked: isChecked,
    }));
    setCheckBoxes(newCheckState);
    const values = newCheckState
      .filter((checkbox) => checkbox.checked === true)
      .map((checkbox) => {
        return checkbox.value;
      });
    setValue(registerName, values.length > 0 ? values : null);
    console.log(`Values: ${values}`);
  }; */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="first" className="control-label">
              First Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="first"
              placeholder="First Name"
              maxLength="100"
              required
              {...register("first")}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="last" className="control-label">
              Last Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="last"
              placeholder="Last Name"
              maxLength="100"
              required
              {...register("last")}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="email" className="control-label">
              Email*
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              id="email"
              placeholder="Email"
              maxLength="100"
              required
              {...register("email")}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="confirm" className="control-label">
              Confirm Email*
            </label>
            <input
              type="text"
              name="confirm"
              className="form-control"
              id="confirm"
              placeholder="Confirm Email"
              maxLength="100"
              required
              {...register("confirm")}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="Date" className="control-label">
          Date*
        </label>
        <DayPickerInput
          dayPickerProps={{
            month: new Date(Date.now()),
            showWeekNumbers: true,
            todayButton: "Today",
          }}
          style={{ width: "100%" }}
        />
        <small className="form-text text-muted">
          Select a day on or after the current date.
        </small>
      </div>

      <CheckBoxGroup
        {...register("emp_type")}
        label="What type of employment are you seeking?"
        required={true}
        childrenCheckBoxes={empTypeCheckboxes}
        onGroupChange={handleCheckBoxGroupChange}
        selectAll={true}
      />

      <div className="form-group">
        <label htmlFor="Start_of_employment" className="control-label">
          If offered employment, how soon can you start working?*
        </label>
        <input
          type="text"
          className="form-control"
          id="StartOfWork"
          required
          {...register("startOfWork")}
        />
        <small className="form-text text-muted">
          Please select a date on or after the current date.
        </small>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

// checkbox component
// check box group component
// date picker component
//
