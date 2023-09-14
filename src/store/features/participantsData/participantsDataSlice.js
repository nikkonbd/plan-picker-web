import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  participantData: {},
};

const participantDataSlice = createSlice({
  name: "participantData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = participantDataSlice.actions;
export default participantDataSlice.reducer;
