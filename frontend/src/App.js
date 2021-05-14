import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Routes from "./router";
import { fetch_user, selectAuth } from "./redux/app/features/ auth/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_user());
  });

  const auth = useSelector(selectAuth);
  console.log(auth);

  return (
    <div className="App">
      <div className="page-content add-full-height">
        <>
          <Routes />
        </>
      </div>
    </div>
  );
}

export default App;
