import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import DefaultNav from "./DefaultNav";
import LoggedInNav from "./LoggedInNav";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  // get the screen size
  const isLoggedIn = false;

  const renderNav = () => {
    if (isLoggedIn) {
      return <LoggedInNav />;
    }
    return <DefaultNav />;
  };

  return (
    <header>
      <Navbar bg="light" expand="xl">
        <Container fluid>{renderNav()}</Container>
      </Navbar>
    </header>
  );
}
