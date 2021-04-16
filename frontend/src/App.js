import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetch_user, selectAuth, authenticate } from "./auth/ auth/authSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { components } from "./components/index";
import Login from "./components/Login";
import Header from "./components/headers/Header";

function App() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    dispatch(fetch_user());
  });

  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact component={components.Landing} />
        <Route path="/login" component={components.Login} />
        <Route path="/signup" component={components.SignUp} />
      </Router>
    </div>
  );
}

export default App;
