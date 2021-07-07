import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  auth: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // action creators
    authenticate: (state, action) => {
      state.auth = action.payload || false;
    },
  },
});

export const { authenticate } = authSlice.actions;

export const fetch_user = () => (dispatch, getState) => {
  const currentAuth = selectAuth(getState());
  if (currentAuth.auth === null || currentAuth.auth === false) {
    axios.get("/api/current_user").then((response) => {
      dispatch(authenticate(response.data));
    });
  }
};

export const login = (credentials) => (dispatch, getState) => {
  const currentAuth = selectAuth(getState());
  if (currentAuth.auth === false) {
    axios.post("/api/login", credentials).then((response) => {
      dispatch(fetch_user());
    });
  }
};

// export actions
// selectors
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
