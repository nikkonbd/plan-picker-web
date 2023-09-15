import { combineReducers } from '@reduxjs/toolkit';

import formSubmissionReducer from "../features/formSubmission/formSubmissionSlice";
import userReducer from '../features/users/userSlice';

import objectDataReducer from "../features/objectData/ObjectDataSlice";
import participantDataReducer from "../features/participantsData/participantsDataSlice";
import confirmedEventDataReducer from "../features/cofirmedEvent/confirmedEvent"

const rootReducer = combineReducers({
    formSubmission: formSubmissionReducer,
    auth: userReducer,
    objectData: objectDataReducer,
    participantData: participantDataReducer,
    confirmedEventData: confirmedEventDataReducer,
});

export default rootReducer;
