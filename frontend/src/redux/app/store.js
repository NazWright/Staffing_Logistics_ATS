import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import authReducer from "./features/ auth/authSlice";
import listingsReducer from "./features/listings/listingSlice";
import appReducer from "./reducer";
import applicationSlice from "./features/application/applicationSlice";

export const store = configureStore({
  reducer: {
    App: appReducer,
    counter: counterReducer,
    auth: authReducer,
    listings: listingsReducer,
    application: applicationSlice,
  },
});
