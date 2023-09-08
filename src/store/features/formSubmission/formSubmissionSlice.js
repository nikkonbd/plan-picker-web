import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const formSubmissionSlice = createSlice({
    name: "formSubmission",
    initialState: {
        isLoading: false,
        isSuccess: false,
        error: null,
        insertedId: null,
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

    },
});

export const {
    formSubmissionStart,
    formSubmissionSuccess,
    formSubmissionFailure,
    formSubmissionInsertId,
} = formSubmissionSlice.actions;

export default formSubmissionSlice.reducer;


// Async action creator to send the form data
export const submitFormData = (formData) => async (dispatch) => {

    try {

        dispatch(formSubmissionStart());
        const response = await axios.post("http://localhost:5000/addEvent", formData); // Adjust the API endpoint
        dispatch(formSubmissionSuccess());
        console.log(response.data); // Display response data
        
        dispatch(formSubmissionInsertId(response.data.insertedId));
    } catch (error) {
        dispatch(formSubmissionFailure(error.message));
    }
};

