import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VisitorHeader from "./VisitorHeader";
import LoggedInHeader from "./LoggedInHeader";

import { selectAuth } from "../../auth/ auth/authSlice";
export default function Header() {
  const authInfo = useSelector(selectAuth);

  return <div>{renderHeader()}</div>;

  function renderHeader() {
    switch (authInfo.auth) {
      case null:
        return <VisitorHeader />;
      case false:
        return <VisitorHeader />;
      default:
        return <LoggedInHeader />;
    }
  }
}
