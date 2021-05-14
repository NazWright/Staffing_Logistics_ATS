import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  if (currentAuth.auth === null) {
    axios.get("/api/current_user").then((response) => {
      dispatch(authenticate(response.data));
    });
  }
};

// export actions
// selectors
export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
