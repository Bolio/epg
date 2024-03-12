import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AiOutlineDash } from "react-icons/ai";

import { StyledEventCard } from "./StyledComponents";
import { convertHoursToMinutes, getHourBeginAndEnd } from "./utilities";
import {
  title,
  airtime,
  description,
} from "../../../Redux/slices/Epg/tvShowInfoSlice";
import { EventCardProps } from "./types";
import { RootState, AppDispatch } from "../../../Redux/store";

const EventCard = ({ event }: EventCardProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const widthEvent = (convertHoursToMinutes(event.duration) * 300) / 60;

  const schedule = getHourBeginAndEnd(event.date_begin, event.date_end);

  useEffect(() => {
    if (hovered) {
      dispatch(title(event.ext_original_name));
      dispatch(airtime(`${schedule} ${event.duration}`));
      dispatch(description(event.description));
    }
  }, [hovered]);

  return (
    <StyledEventCard
      widthEventPx={widthEvent}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="channel-number">
        <p>{event.ext_original_name}</p>
        <p>{schedule}</p>
        <div className="container-outlinedash">
          <AiOutlineDash />
        </div>
      </div>
    </StyledEventCard>
  );
};

export default EventCard;
