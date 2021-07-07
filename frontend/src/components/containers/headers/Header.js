import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import DefaultNav from "./DefaultNav";
import LoggedInNav from "./LoggedInNav";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  // change this to redux selector
  const isLoggedIn = false;

  const renderNav = () => {
    if (isLoggedIn) {
      return <LoggedInNav />;
    }
    return <DefaultNav />;
  };

  return <header style={{ minHeight: "106px" }}>{renderNav()}</header>;
}
