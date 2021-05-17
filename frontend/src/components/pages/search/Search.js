import React, { useState } from "react";
import Card from "../../uiElements/Card";
import SearchBar from "./SearchBar";
import SearchInput from "./SearchInput";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import { borderRadius } from "../../../helpers/style_helpers";
import CheckBox from "../../uiElements/CheckBox";
import CheckBoxGroup from "../../uiElements/CheckBoxGroup";
import SlidingInput from "../../uiElements/SlidingInput";

export default function Search() {
  const FilterInput = ({ title, children }) => {};

  const SlidingBar = ({ label, min, max, minlabel, maxlabel }) => {};

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

  return (
    <div className="container">
      <div className="row" style={{ paddingTop: "20px" }}>
        <div className="col-12 col-md-4 col-xs-8">
          <CheckBoxGroup
            title="Job Type"
            children={[
              <CheckBox key={0} label="Full Time" />,
              <CheckBox key={1} label="Part Time" />,
              <CheckBox key={2} label="Contract" />,
              <CheckBox key={3} label="Internship" />,
              <CheckBox key={4} label="Temporary" />,
            ]}
          />
          <SlidingInput />
          <CheckBoxGroup
            title="Experience Level"
            children={[
              <CheckBox key={0} label="All" />,
              <CheckBox key={1} label="Senior" />,
              <CheckBox key={2} label="Mid" />,
              <CheckBox key={3} label="Junior" />,
            ]}
          />
          <CheckBoxGroup
            title="Posted Time"
            children={[
              <CheckBox key={0} label="Anytime" />,
              <CheckBox key={1} label="Last day" />,
              <CheckBox key={2} label="Last 3 days" />,
              <CheckBox key={3} label="Last week" />,
            ]}
          />
        </div>
        <div className="col-12 col-md-8 col-xs-12 ">
          <SearchBar />
          <div
            className="pt-12 ml-lg-0 ml-md-15"
            style={{ paddingTop: "2.8125rem" }}
          >
            <div className="pt-6">
              <div className="row justify-content-center">
                <Card children={<SearchChildren />} />
                <Card children={<SearchChildren />} />
                <Card children={<SearchChildren />} />
                <Card children={<SearchChildren />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
