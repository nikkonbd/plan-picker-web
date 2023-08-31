import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
    name: 'events',
    initialState: [],
    reducers: {
        addEvent: (state, action) => {
            state.push(action.payload);
        },
        // Define other actions here
    },
});

export const { addEvent } = eventSlice.actions;

export default eventSlice.reducer;
