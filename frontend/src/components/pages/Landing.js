import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import LandingImage from "../../assets/landingBackground.jpg";
import { Row, Col, Form, ButtonGroup, Button } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
// populate dropdown from a list of job categories

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${LandingImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
  },
  heading: {
    padding: "20px 20px",
  },
}));
export default function Landing() {
  const [address, setAddress] = useState("");

  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const [keyword, setKeyword] = useState("");

  const [tags, setTags] = useState([]);

  const history = useHistory();

  const onSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  const handleSearch = () => {
    history.push("/browse", {
      address,
      coordinates,
      keyword,
      tags,
    });
  };
  const onChangeHandlerKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const onChangeHandlerSelect = (e) => {
    setTags();
  };

  const onError = async (error) => {
    console.log(error);
  };

  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.heading}>
          <h3>Find an opportunity in your area!</h3>
        </div>
        <div className="center-child-flex">
          <Form className="add-half-width">
            <Form.Group controlId="search">
              <Form.Label>What type of job are you looking for?</Form.Label>
              <Form.Control
                as="input"
                type="text"
                placeholder="Enter Job Title or Skill"
                onChange={onChangeHandlerKeyword}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <FaIcons.FaMapMarkerAlt size={25} color="black" /> Where?
              </Form.Label>
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
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <AiIcons.AiFillTags size={25} color="black" /> Tags
              </Form.Label>
              <Form.Control
                as="select"
                onChange={onChangeHandlerSelect}
              ></Form.Control>

              <Form.Text>
                Select from the available tags to recieve tailored results
              </Form.Text>
            </Form.Group>
            <ButtonGroup>
              <Button onClick={handleSearch}>Search Open Jobs</Button>
            </ButtonGroup>
          </Form>
        </div>
        <CssBaseline />
      </div>
    </div>
  );
}
