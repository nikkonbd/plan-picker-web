import { combineReducers } from '@reduxjs/toolkit';

import formSubmissionReducer from "../features/formSubmission/formSubmissionSlice";
import userReducer from '../features/users/userSlice';

import objectDataReducer from "../features/objectData/ObjectDataSlice";
import participantDataReducer from "../features/participantsData/participantsDataSlice";

const rootReducer = combineReducers({
    formSubmission: formSubmissionReducer,
    auth: userReducer,
    objectData: objectDataReducer,
    participantData: participantDataReducer,

});

export default rootReducer;
