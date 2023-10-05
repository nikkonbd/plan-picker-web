import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const confirmedEventSlice = createSlice({
  name: "confirmedEvent",
  initialState: {
    isLoading: false,
    isSuccess: false,
    error: null,
    insertedId: null,
    eventData: [],
  },
  reducers: {
    formSubmissionStart: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.error = null;
    },
    formSubmissionSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.error = null;
    },
    formSubmissionFailure: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    submissionConfirmedInsertId: (state, action) => {
      state.insertedId = action.payload;
    },
    confirmedEventData: (state, action) => {
      state.eventData = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  formSubmissionStart,
  formSubmissionSuccess,
  formSubmissionFailure,
  submissionConfirmedInsertId,
  confirmedEventData,
} = confirmedEventSlice.actions;

export default confirmedEventSlice.reducer;

// Async action creator to send the form data
export const confirmedSubmitData = (confirmedData) => async (dispatch) => {
  console.log(confirmedData);
  try {
    dispatch(formSubmissionStart());
    const response = await axios.post(
      "https://plan-picker-server-production-96ce.up.railway.app/participant-event",
      confirmedData
    );
    console.log(confirmedData);
    console.log(response.data);

    const insertedId = response.data.insertedId;

    // Now, fetch data associated with the inserted ID
    const dataResponse = await axios.get(
      `https://plan-picker-server-production-96ce.up.railway.app/getConfirmedSchdule/${insertedId}`
    ); // Adjust the API endpoint

    const eventData = dataResponse.data;
    console.log(eventData);

    // Dispatch the inserted ID and eventData to your component
    dispatch(submissionConfirmedInsertId(insertedId));
    dispatch(confirmedEventData(eventData));
    dispatch(formSubmissionSuccess());
  } catch (error) {
    dispatch(formSubmissionFailure(error.message));
  }
};
