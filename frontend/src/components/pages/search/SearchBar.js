import React, { useState } from "react";
import SearchInput from "./SearchInput";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import * as AiIcons from "react-icons/ai";

export default function SearchBar() {
  const jobTypeFilter = [
    "Full Time",
    "Part Time",
    "Contract",
    "Internship",
    "Temporary",
  ];
  const [address, setAddress] = useState("");
  const [keyword, setKeyword] = useState("");

  return (
    <div className="formWrapper">
      <div
        className="form"
        style={{
          boxShadow: "0 29px 75px hsl(0deg 0% 61% / 16%)",
          paddingLeft: "1rem",
          paddingBottom: "1rem",
          paddingRight: "1rem",
          paddingTop: "1rem",
          borderRadius: ".3125rem",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ width: "calc(100%/2)", float: "left" }}>
          <SearchInput
            icon={<AiIcons.AiFillAccountBook size={20} />}
            placeholder={`Enter a keyword, job title or skill`}
          />
        </div>
        <div style={{ width: "calc(100%/2)", float: "left" }}>
          <GooglePlacesAutocomplete
            apiKey={"AIzaSyCJ590ZkdA4P9dmFwj2cyuH9Szz8J98Dig"}
            onLoadFailed={(error) => {
              console.error("Could not inject Google script", error);
            }}
            selectProps={{
              value: address,
              onChange: setAddress,
            }}
          ></GooglePlacesAutocomplete>
        </div>
        <div style={{ float: "left" }}>
          <button style={{ float: "right", height: "100%" }}>Search</button>
        </div>
      </div>
    </div>
  );
}
