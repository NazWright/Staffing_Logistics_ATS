import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changePreferences } from "../../../redux/app/features/application/applicationSlice";
import { useForm } from "react-hook-form";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import {
  employmentCheckBoxes,
  transportationCheckBoxes,
  daysCheckBoxes,
  jobShiftCheckBoxes,
} from "./data/checkboxesData";
import CheckBoxGroup from "../../uiElements/CheckBoxGroup";
import TagInput from "../../uiElements/TagInput";

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

  const [transportCheckboxes, setTransportCheckBoxes] = useState(
    transportationCheckBoxes
  );

  const [daysOfWeekCheckBoxes, setDaysOfWeekChkBox] = useState(daysCheckBoxes);

  const [shiftCheckBoxes, setShiftCheckBoxes] = useState(jobShiftCheckBoxes);

  // If you have more than one checkbox group to use
  // create a map: [registerName]: [function to update part of the state]
  const checkBoxMap = {
    emp_type: setEmpTypeCheckBoxes,
    transportationType: setTransportCheckBoxes,
    availability: setDaysOfWeekChkBox,
    prefferedShift: setShiftCheckBoxes,
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

  const radioOnChange = (e) =>
    e && e.target && setValue("eightTo12HrShifts", e.target.value);

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
          {...register("date")}
          dayPickerProps={{
            month: new Date(Date.now()),
            showWeekNumbers: true,
            todayButton: "Today",
            onDayClick: (day) => {
              setValue("date", day.toLocaleString());
            },
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
        <label htmlFor="startOfWork" className="control-label">
          If offered employment, how soon can you start working?
        </label>
        <DayPickerInput
          {...register("startOfWork")}
          dayPickerProps={{
            month: new Date(Date.now()),
            showWeekNumbers: true,
            todayButton: "Today",
            onDayClick: (day) => {
              setValue("startOfWork", day.toLocaleString());
            },
          }}
          style={{ width: "100%" }}
        />
        <small className="form-text text-muted">
          Select a day on or after the current date.
        </small>
      </div>

      <CheckBoxGroup
        {...register("availability")}
        label="Please select the days you are available to work"
        required={true}
        childrenCheckBoxes={daysOfWeekCheckBoxes}
        onGroupChange={handleCheckBoxGroupChange}
        selectAll={true}
      />

      <div
        className="form-group"
        {...register("eightTo12HrShifts")}
        onClick={(e) => {
          radioOnChange(e);
        }}
      >
        <label htmlFor="Shifts" className="control-label">
          Are you available to work 8-12 hour shifts including weekends?*
        </label>
        <br />
        <input type="radio" name="Shifts" value="Yes" id="Shifts0" required />
        &nbsp;
        <label htmlFor="Shifts0" className="control-label">
          {" "}
          Yes
        </label>
        <input type="radio" name="Shifts" value="No" id="Shifts1" />
        &nbsp;
        <label htmlFor="Shifts1" className="control-label">
          {" "}
          No
        </label>
      </div>

      <CheckBoxGroup
        {...register("transportationType")}
        label="Transportation"
        required={true}
        childrenCheckBoxes={transportCheckboxes}
        onGroupChange={handleCheckBoxGroupChange}
        selectAll={false}
      />

      <div
        className="form-group"
        {...register("drugScreening")}
        onClick={(e) => {
          radioOnChange(e);
        }}
      >
        <label htmlFor="drug" className="control-label">
          Would you be willing to consent to a drug screening?*
        </label>
        <br />
        <input type="radio" name="drug" value="Yes" id="drug0" required />
        &nbsp;
        <label htmlFor="drug0" className="control-label">
          {" "}
          Yes
        </label>
        <input type="radio" name="drug" value="No" id="drug1" />
        &nbsp;
        <label htmlFor="drug1" className="control-label">
          {" "}
          No
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="salaryReq" className="control-label">
          Salary Requirements*
        </label>
        <input
          type="text"
          className="form-control"
          id="salaryReq"
          placeholder="Enter Salary"
          maxLength="100"
          required
          {...register("salaryReq")}
        />
      </div>

      <CheckBoxGroup
        {...register("prefferedShift")}
        label="Select your preffered shift"
        required={true}
        childrenCheckBoxes={shiftCheckBoxes}
        onGroupChange={handleCheckBoxGroupChange}
        selectAll={true}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

/* <TagInput
        label="Tags"
        tags={[
          { name: "New York", selected: false },
          { name: "London", selected: false },
          { name: "Memphis", selected: false },
          { name: "New Orleans", selected: true },
        ]}
      /> */
