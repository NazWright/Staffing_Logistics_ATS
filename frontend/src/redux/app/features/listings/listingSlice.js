import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  listings: null,
};

export const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    // action creators
    getListings: (state, action) => {
      state.listings = action.payload || false;
    },
  },
});

export const { getListings } = listingSlice.actions;

export const fetch_listings = () => (dispatch, getState) => {
  const currentListings = selectListings(getState());
  if (currentListings.listings === null) {
    axios.get("/api/listings").then((response) => {
      dispatch(getListings(response.data));
    });
  }
};

// export actions
// selectors
export const selectListings = (state) => state.listings;

export default listingSlice.reducer;
