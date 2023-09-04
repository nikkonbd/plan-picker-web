// objectDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const objectDataSlice = createSlice({
    name: 'objectData',
    initialState: null,
    reducers: {
        setObjectData: (state, action) => {
            return action.payload;
        },
    },
});

export const { setObjectData } = objectDataSlice.actions;
export default objectDataSlice.reducer;
