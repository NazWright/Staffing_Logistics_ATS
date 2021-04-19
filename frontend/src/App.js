import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetch_user, selectAuth, authenticate } from "./auth/ auth/authSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { components } from "./components/index";
import Login from "./components/Login";
import LoggedInHeader from "./components/headers/LoggedInHeader";
import VisitorHeader from "./components/headers/VisitorHeader";
import BrowseJob from "./components/jobs/BrowseJob";

function App() {
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

  const authInfo = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_user());
  });

  return (
    <div className="App">
      {renderHeader()}
      <div className="page-content add-full-height">
        <Router>
          <Switch>
            <Route path="/" exact component={components.Landing} />
            <Route path="/login" component={components.Login} />
            <Route path="/signup" component={components.SignUp} />
            <Route path="/browse" component={BrowseJob} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
