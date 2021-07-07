import React, { useEffect, useState } from "react";
import { Container, Row, Form, Col, Button, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  filter_jobs,
  filterJobs,
  selectJobs,
  updateJobs,
} from "../../redux/app/features/jobs/jobSlice";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import CheckBoxGroup from "../uiElements/CheckBoxGroup";

export default function EditJob() {
  const [address, setAddress] = useState("");
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
    /*  setValue(
      "employmentTypes",
      state
        .filter((item) => item.checked)
        .map((filteredItem) => {
          return filteredItem.value;
        })
    ); */
  };

  const { jobId } = useParams();
  const {} = useHistory();
  const { register, handleSubmit, setValue } = useForm();

  const handleAddress = (address) => {
    setAddress(address);
    //setValue("address", address.label);
    console.log(address);
  };

  const selectedJob = useSelector();
  console.log(selectedJob);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filter_jobs({ title: "High Point" }));
  }, []);

  const onSubmit = (data) => {
    dispatch(updateJobs(data, jobId));
    console.log(data);
  };

  const renderContent = () => {
    if (Object.keys(selectedJob).length < 1) {
      return <div>No jobs found by this id... retrying</div>;
    } else {
      return (
        <div>
          <h2> Edit Job: {selectedJob.job.title}</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
              <Col>
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  {...register("title")}
                  defaultValue={selectedJob.job.title}
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
                    defaultInputValue:
                      selectedJob.job.addresses[0] || undefined,
                  }}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  {...register("description")}
                  defaultValue={selectedJob.job.description}
                  as="textarea"
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <CheckBoxGroup
                  name="employmentTypes"
                  childrenCheckBoxes={employmentTypes}
                  selectAll={true}
                  label="Employment Types"
                  {...register("employmentTypes")}
                  onGroupChange={handleCheckBoxChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Application URL</Form.Label>
                <Form.Control
                  {...register("applicationURLs")}
                  defaultValue={`/jobs/apply/${jobId}`}
                />
                <Form.Text>
                  Please enter full URL if job application is on external site.
                </Form.Text>
              </Col>

              <Col>
                <Form.Label>Job posting expires on..</Form.Label>
                <Form.Control
                  {...register("postingExpireTime")}
                  placeholder="Enter Date"
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Job Level</Form.Label>
                <Form.Control {...register("jobLevel")} />
                <Form.Text>e.g. Senior</Form.Text>
              </Col>

              <Col>
                <Form.Label>Job position ends on...</Form.Label>
                <Form.Control
                  {...register("jobEndTime")}
                  placeholder="Enter Date"
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label>Min compensation</Form.Label>
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
                <Form.Label>Max compensation</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>

                  <Form.Control
                    {...register("maxCompensation")}
                    placeholder="e.g. 14.00"
                  />

                  <InputGroup.Append>
                    <InputGroup.Text>/Hour</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Form.Row>

            <Button type="submit">Update Job</Button>
          </Form>
        </div>
      );
    }
  };

  return <Container>{renderContent()}</Container>;
}
