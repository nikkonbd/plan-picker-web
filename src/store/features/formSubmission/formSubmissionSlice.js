import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const formSubmissionSlice = createSlice({
  name: "formSubmission",
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
    formSubmissionInsertId: (state, action) => {
      state.insertedId = action.payload;
    },
    setEventData: (state, action) => {
      state.eventData = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  formSubmissionStart,
  formSubmissionSuccess,
  formSubmissionFailure,
  formSubmissionInsertId,
  setEventData,
} = formSubmissionSlice.actions;

export default formSubmissionSlice.reducer;

// Async action creator to send the form data
export const submitFormData = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    dispatch(formSubmissionStart());
    const response = await axios.post(
      "http://localhost:5000/addEvent",
      formData
    ); // Adjust the API endpoint

    console.log(response.data); // Display response data

    const insertedId = response.data.insertedId;

    // Now, fetch data associated with the inserted ID
    const dataResponse = await axios.get(
      `http://localhost:5000/getEventData/${insertedId}`
    ); // Adjust the API endpoint

    const eventData = dataResponse.data;

    // Dispatch the inserted ID and eventData to your component
    dispatch(setEventData(eventData));
    dispatch(formSubmissionInsertId(insertedId));
    dispatch(formSubmissionSuccess());
  } catch (error) {
    dispatch(formSubmissionFailure(error.message));
  }
};
