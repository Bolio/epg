import { createSlice } from "@reduxjs/toolkit";

interface ActivitiesState {
  title: string;
  airtime: string;
  description: string;
}

const initialState: ActivitiesState = {
  title: "",
  airtime: "",
  description: "",
};

const tvShowInfoSlice = createSlice({
  name: "TV Show Info",
  initialState,
  reducers: {
    title: (state, action) => {
      state.title = action.payload;
    },
    airtime: (state, action) => {
      state.airtime = action.payload;
    },
    description: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { title, airtime, description } = tvShowInfoSlice.actions;

export default tvShowInfoSlice.reducer;
