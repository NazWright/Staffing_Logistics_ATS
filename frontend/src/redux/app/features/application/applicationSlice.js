import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  jobPreferences: {},
  references: {},
  signatures: {},
  emergencyContact: {},
  personalInfo: {},
  backgroundCheck: {},
};

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    // action creators
    changePreferences: (state, action) =>
      (state.jobPreferences = action.payload),
    changeSignatures: (state, action) => (state.signatures = action.payload),
    changeReferences: (state, action) => (state.references = action.payload),
    changeEmergencyContact: (state, action) =>
      (state.jobPreferences = action.payload),
    changePersonalInfo: (state, action) =>
      (state.personalInfo = action.payload),
    changeBackgroundInfo: (state, action) =>
      (state.backgroundCheck = action.payload),
  },
});

export const {
  changeBackgroundInfo,
  changeEmergencyContact,
  changePersonalInfo,
  changePreferences,
  changeReferences,
  changeSignatures,
} = applicationSlice.actions;

export default applicationSlice.reducer;
