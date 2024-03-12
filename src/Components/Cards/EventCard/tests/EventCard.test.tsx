import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IEvent } from "../types";
import EventCard from "../EventCard";

const mockStore = configureStore([]);
const store = mockStore({});

const event: IEvent = {
  channel_id: "123",
  source_uri: "http://example.com",
  id: "456",
  name: "Event Name",
  description: "Event Description",
  talent: null,
  date_begin: "2022-01-01T12:00:00Z",
  date_end: "2022-01-01T13:00:00Z",
  unix_begin: 1641038400,
  unix_end: 1641042000,
  duration: "1h",
  language: "English",
  type: "Movie",
  group_id: null,
  confirmado: null,
  id_empleado: null,
  tms_id: null,
  event_alf_id: "789",
  ext_ncont_id: "101112",
  ext_nevt_id: "131415",
  ext_actors: null,
  ext_director: null,
  ext_year: null,
  ext_country: null,
  ext_original_name: "Original Event Name",
  ext_ep_original_name: null,
  ext_series_id: "161718",
  ext_season_id: "192021",
  ext_episode_id: "222324",
  ext_language: "Spanish",
  ext_serie_short_desc: null,
  ext_serie_desc: null,
  image_base_horizontal: "http://example.com/horizontal.jpg",
  image_base_vertical: "http://example.com/vertical.jpg",
  image_base_square: "http://example.com/square.jpg",
  ext_eventimage_name: "event-image.jpg",
  ext_eventimage_name_base: "event-image-base.jpg",
  ext_catchup: "yes",
  ext_startover: "no",
  ext_recordable: "yes",
  parental_rating: "PG",
  aud_stereo: "yes",
  aud_dolby: "no",
  vid_black_and_white: "no",
  dvb_content: null,
  user_content: null,
  group_rel: null,
  gmt: -6,
};

describe("EventCard component", () => {
  it("Should render the event name and schedule", () => {
    const { getByText } = render(
      <Provider store={store}>
        <EventCard event={event} />
      </Provider>
    );
    expect(getByText(event.ext_original_name)).toBeInTheDocument();
  });

  it("Should dispatch actions when hovered", () => {
    const { getByText } = render(
      <Provider store={store}>
        <EventCard event={event} />
      </Provider>
    );

    fireEvent.mouseEnter(getByText(event.ext_original_name));
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: "TV Show Info/title", payload: event.ext_original_name },
      { type: "TV Show Info/airtime", payload: "06:00:00 - 07:00:00 1h" },
      { type: "TV Show Info/description", payload: event.description },
    ]);
  });
});
