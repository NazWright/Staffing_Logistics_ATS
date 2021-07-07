import React, { useEffect, useState } from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  filter_jobs,
  selectJobs,
} from "../../../redux/app/features/jobs/jobSlice";
import TagInput from "../../uiElements/TagInput";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import CheckBoxGroup from "../../uiElements/CheckBoxGroup";

export default function SearchForm({ parentCallback }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();
  const min = 0;
  const max = 100;
  const [address, setAddress] = useState("");
  const [milesFromHome, setMilesFromHome] = useState(
    (parseInt(min) + parseInt(max)) / 2
  );

  const [keywordTags, setKeywordTags] = useState([
    {
      name: "Agile",
      selected: true,
    },
    {
      name: "Scrum",
      selected: true,
    },
  ]);

  const [employmentTypes, setEmploymentTypes] = useState([
    {
      name: "Full_Time",
      label: "Full Time",
      value: "Full Time",
      checked: false,
    },
    {
      name: "Part_Time",
      label: "Part Time",
      value: "Part Time",
      checked: false,
    },
    {
      name: "Internship",
      label: "Internship",
      value: "Internship",
      checked: false,
    },
    {
      name: "Contractor",
      label: "Contractor",
      value: "Contractor",
      checked: false,
    },
    {
      name: "Temporary",
      label: "Temporary",
      value: "Temporary",
      checked: false,
    },
  ]);

  const handleCheckBoxChange = (state) => {
    setEmploymentTypes(state);
    setValue(
      "employmentTypes",
      state
        .filter((item) => item.checked)
        .map((filteredItem) => {
          return filteredItem.value;
        })
    );
  };

  const handleTagsCallback = (newTags) => {
    console.log("tags", newTags);
    setKeywordTags(newTags);
  };

  const handleAddress = (address) => {
    setAddress(address);
    setValue("address", address.label);
    console.log(address);
  };

  const onSumbit = (data) => {
    // call filter action creator and get those jobs back
    dispatch(filter_jobs(data));
    // call the parent callback and pass through those new job
  };

  const auth = useSelector(selectJobs);
  console.log(auth);

  return (
    <Form as="form" onSubmit={handleSubmit(onSumbit)}>
      <Form.Row>
        <Col>
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            as="input"
            type="text"
            {...register("title")}
            placeholder="Enter a job title"
          />
        </Col>
        <Col>
          <Form.Label>Address</Form.Label>
          <GooglePlacesAutocomplete
            {...register("address")}
            apiKey={"AIzaSyCJ590ZkdA4P9dmFwj2cyuH9Szz8J98Dig"}
            onLoadFailed={(error) => {
              console.error("Could not inject Google script", error);
            }}
            selectProps={{
              value: address,
              onChange: handleAddress,
            }}
          />
        </Col>
      </Form.Row>
      <Form.Row>
        <div style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%" }}>
          <Form.Label>Miles from home</Form.Label>
          <Form.Control
            {...register("distanceInMiles")}
            type="range"
            as="input"
            min={min}
            max={max}
            onChange={(e) => setMilesFromHome(e.target.value)}
          />
          <div>Include jobs within {milesFromHome} Miles from home</div>
        </div>
      </Form.Row>
      <Form.Row>
        <div style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%" }}>
          <Form.Label>Keywords</Form.Label>
          <TagInput tags={keywordTags} callback={handleTagsCallback} />
        </div>
      </Form.Row>
      <Form.Row>
        <div style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%" }}>
          <Form.Label>Company Names</Form.Label>
          <TagInput tags={keywordTags} callback={handleTagsCallback} />
        </div>
      </Form.Row>
      <Form.Row>
        <div style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%" }}>
          <CheckBoxGroup
            name="employmentTypes"
            childrenCheckBoxes={employmentTypes}
            selectAll={true}
            label="Employment Types"
            onGroupChange={handleCheckBoxChange}
          />
        </div>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Label>Min Compensation</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>

            <Form.Control
              placeholder="e.g. 14.00"
              {...register("minCompensation")}
            />

            <InputGroup.Append>
              <InputGroup.Text>/Hour</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col>
          <Form.Label>Max Compensation</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control {...register("maxCompensation")} />

            <InputGroup.Append>
              <InputGroup.Text>/Hour</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Form.Row>
      <Form.Row>
        <div style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%" }}>
          <Form.Label>Job Categories</Form.Label>
          <TagInput tags={keywordTags} callback={handleTagsCallback} />
        </div>
      </Form.Row>

      <Button type="submit">Submit</Button>
    </Form>
  );
}
