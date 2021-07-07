import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import LoggedInHeader from "./LoggedInHeader";
import VisitorHeader from "./VisitorHeader";

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth) ? true : false;
  const { collapsed, openDrawer } = useSelector((state) => state.App);

  const classes = {
    header: "header",
    headerLeft: "headerLeft",
    menuButton: "menuButton",
  };

  return (
    <header className={classes.header}>
      {isLoggedIn ? <LoggedInHeader /> : <VisitorHeader />}
    </header>
  );
}
