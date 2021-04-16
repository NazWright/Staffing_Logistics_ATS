import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import LandingImage from "../assets/landingBackground.jpg";
import BSForm from "react-bootstrap/Form";
import { Row, Col, Button } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
// populate dropdown from a list of job categories

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${LandingImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function Landing() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
      </div>
    </div>
  );
}
