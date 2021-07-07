import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { objectToQueryString } from "../../../../helpers/objectHelpers";

const initialState = {
  jobs: [],
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    // action creators
    populateJobs: (state, action) => {
      state.jobs = action.payload || false;
    },
    updateJobsReducer: (state, action) => {
      state.jobs = updateObjectInArray();
    },
  },
});

export const { populateJobs } = jobSlice.actions;

export const filter_jobs = (filter) => {
  const filterString = objectToQueryString(filter);
  return (dispatch, getState) => {
    axios.get(`/api/jobs/search?${filterString}`).then((response) => {
      dispatch(populateJobs(response.data[0].matchingJobs));
    });
  };
};

export const updateJobs = (updateInfo, jobId) => {
  return (dispatch, getState) => {
    const state = getState();
    const allJobs = selectJobs(state);
    const currentJob = filterJobs(state, jobId);

    axios.put(`/api/jobs?jobId=${jobId}`, updateInfo).then((response) => {
      //const updatedJobs = updateObjectInArray(allJobs, response.data)
      console.log("res", response.data);
    });
  };
};

function updateObjectInArray(array, job) {
  return array.map((item) => {
    if (item.job.requisitionId !== job.job.requisitionId) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...job,
    };
  });
}

export const fetch_all_jobs = (pageNumber) => {};

// export actions
// selectors
export const selectJobs = (state) => state.jobsReducer.jobs;

export const filterJobs = (state, jobId) =>
  state.jobsReducer.jobs.filter((job) => job.job.requisitionId === jobId)[0];

export default jobSlice.reducer;
