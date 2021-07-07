import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Routes from "./router";
import { fetch_user, selectAuth } from "./redux/app/features/ auth/authSlice";
import Header from "./components/containers/headers/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_user());
  });

  const auth = useSelector(selectAuth).auth;
  console.log(auth);

  return (
    <div className="App">
      <Header />
      <>
        <Routes />
      </>
    </div>
  );
}

export default App;
