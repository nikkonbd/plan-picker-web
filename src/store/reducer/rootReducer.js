import { combineReducers } from '@reduxjs/toolkit';
import eventReducer from '../features/event/eventSlice';
import formSubmissionReducer from "../features/formSubmission/formSubmissionSlice";
import userReducer from '../features/users/userSlice';

const rootReducer = combineReducers({
    events: eventReducer,
    formSubmission: formSubmissionReducer,
    auth: userReducer,

});

export default rootReducer;
