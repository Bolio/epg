import { configureStore } from "@reduxjs/toolkit";

import allChannelsAndEventsReducer from "../slices/Epg/allChannelsAndEventsSlice";
import tvShowInfoReducer from "../slices/Epg/tvShowInfoSlice";

export const store = configureStore({
  reducer: {
    allChannelsAndEvents: allChannelsAndEventsReducer,
    tvShowInfo: tvShowInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
