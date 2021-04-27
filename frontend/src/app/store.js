import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../auth/ auth/authSlice";
import listingsReducer from "../features/listings/listingSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    listings: listingsReducer,
  },
});
