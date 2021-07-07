import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Card from "../../uiElements/Card";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import SearchForm from "./SearchForm";
import { useSelector } from "react-redux";
import JobWidget from "../../jobs/JobWidget";

export default function Search() {
  const [visibleJobs, setVisibleJobs] = useState([]);
  const jobs = useSelector((state) => state.jobsReducer.jobs);
  console.log("these are the jobs", jobs);

  const handleCallback = (newState) => {
    setVisibleJobs(newState);
  };

  const Jobs = () => {
    if (jobs && jobs.length > 0) {
      return jobs.map((matchedJob, index) => {
        const { job } = matchedJob;
        return <JobWidget key={index} {...job} />;
      });
    }
    return "No Jobs Matched...";
  };

  return (
    <Container style={{ height: "100%" }}>
      <div
        style={{
          justifyContent: "center",
          paddingTop: "20px",
          width: "100%",
          maxHeight: "50%",
          height: "50%",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <SearchForm parentCallback={handleCallback} />
        </div>
        <Jobs />
      </div>
      <div style={{ justifyContent: "center" }}></div>
    </Container>
  );
}

const SearchChildren = () => {
  return (
    <div>
      <div style={{ marginBottom: "1.25rem", display: "block" }}>
        <a>
          <AiIcons.AiFillAccountBook size={50} />
        </a>
      </div>
      <a style={{ fontSize: "13px", lineHeight: 2, letterSpacing: ".26px" }}>
        Google INC
      </a>
      <h2 style={{ marginTop: "-.625rem" }}>
        <span
          style={{
            fontSize: "1.5rem",
            lineHeight: 1.5,
            letterSpacing: "-.24px",
            color: "#2b3940",
            marginBottom: ".625rem",
            fontWeight: "bold",
          }}
        >
          Product Designer
        </span>
      </h2>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          marginLeft: "-6px",
          marginRight: "-6px",
          paddingLeft: "0",
          listStyle: "none",
          marginBottom: ".25rem",
        }}
      >
        <li>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 5px",
              marginBottom: "10px",
              marginLeft: "6px",
              marginRight: "6px",
              height: "32px",
              fontSize: "13px",
              lineHeight: 2,
              letterSpacing: ".26px",
              borderRadius: "3px",
              backgroundColor: "rgba(176,213,232,.15)",
              color: "#1a5aeb",
            }}
          >
            <ImIcons.ImLocation2 />
            Brelyn
          </span>
        </li>

        <li>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 5px",
              marginBottom: "10px",
              marginLeft: "6px",
              marginRight: "6px",
              height: "32px",
              fontSize: "13px",
              lineHeight: 2,
              letterSpacing: ".26px",
              borderRadius: "3px",
              backgroundColor: "rgba(176,213,232,.15)",
              color: "#fa5f1c",
            }}
          >
            <ImIcons.ImLocation2 />
            Full-Time
          </span>
        </li>

        <li>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 5px",
              marginBottom: "10px",
              marginLeft: "6px",
              marginRight: "6px",
              height: "32px",
              fontSize: "13px",
              lineHeight: 2,
              letterSpacing: ".26px",
              borderRadius: "3px",
              backgroundColor: "rgba(176,213,232,.15)",
              color: "#2397af",
            }}
          >
            <ImIcons.ImLocation2 />
            80K-90K
          </span>
        </li>
      </ul>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.625",
          letterSpacing: "-.08px",
          color: "#6b6e6f",
          marginBottom: "1.25rem",
        }}
      >
        We are looking for Enrollment Advisors who are looking to take 30-35
        appointments per week. All leads are pre-scheduled.
      </p>
      <div
        className="card-button-group"
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "-8px",
          marginRight: "-8px",
        }}
      >
        <span
          style={{
            height: "48px",
            lineHeight: "36px",
            borderRadius: "3px",
            fontSize: "13px",
            fontWeight: 700,
            padding: "5px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00b074",
            borderColor: "#00b074",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          Apply Now
        </span>
      </div>
    </div>
  );
};
