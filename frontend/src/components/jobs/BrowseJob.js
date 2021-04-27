import React, { useState } from "react";
import JobSearchForm from "./JobSearchForm";
import JobsList from "./JobsList";
import Map from "../Map";

export default function BrowseJob({ location }) {
  const [address, setAddress] = useState(location.state.address);
  const [coordinates, setCoordinates] = useState(location.state.coordinates);

  return (
    <div className="add-full-height">
      <div className="add-half-width left-corner add-full-height">
        <div id="content-part-one">
          <div>
            <h3>Find a Job</h3>
          </div>
          <JobSearchForm address={address} />
        </div>

        <div id="content-part-two">
          <JobsList />
        </div>

        <div className="row"></div>
      </div>
      {/* second half of page content */}
      <div className="add-half-width left-corner add-full-height"></div>
    </div>
  );
}
