import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ActivitiesState {
  channels: [];
  status: undefined | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ActivitiesState = {
  channels: [],
  status: undefined,
  error: null,
};

export const fetchChannelsAndEvents = createAsyncThunk(
  "fetchChannelsAndEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=20240311000000&date_to=20240311235959&quantity=50`
      );
      return response.data.response.channels;
    } catch (error) {
      console.error(error);
      return rejectWithValue("An unknown error occurred");
    }
  }
);

const allChannelsAndEventsSlice = createSlice({
  name: "All Activities",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchChannelsAndEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChannelsAndEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.channels = action.payload;
      })
      .addCase(fetchChannelsAndEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default allChannelsAndEventsSlice.reducer;
