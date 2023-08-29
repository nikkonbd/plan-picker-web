import { combineReducers } from '@reduxjs/toolkit';
import eventReducer from '../features/event/eventSlice';
import formSubmissionReducer from "../features/formSubmission/formSubmissionSlice";

const rootReducer = combineReducers({
    events: eventReducer,
    formSubmission: formSubmissionReducer,
    
});

export default rootReducer;
