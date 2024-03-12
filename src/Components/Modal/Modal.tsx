import { MouseEventHandler, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TVShowInfo } from "../TVShowInfo";
import { ChannelCard } from "../Cards";
import { EventCard } from "../Cards";
import { ModalBackdrop, ModalContent } from "./StyledComponents";
import { hoursDay } from "./utilities";
import { fetchChannelsAndEvents } from "../../Redux/slices/Epg/allChannelsAndEventsSlice";
import { RootState, AppDispatch } from "../../Redux/store";

interface IProps {
  type?: "button" | "submit" | "reset";
  handleToggleModal: MouseEventHandler<HTMLButtonElement>;
  showModal: boolean;
}

const Modal = ({ handleToggleModal, showModal }: IProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { channels } = useSelector(
    (state: RootState) => state.allChannelsAndEvents
  );

  useEffect(() => {
    dispatch(fetchChannelsAndEvents());
  }, []);

  return (
    <div>
      <ModalBackdrop show={showModal}>
        <TVShowInfo handleToggleModal={handleToggleModal} />
        <ModalContent>
          <div className="container-channels-events">
            <div className="channels">
              <div className="date">
                <p>HOY</p>
              </div>
              {channels?.map((channel: any, index) => {
                return (
                  <ChannelCard
                    key={index}
                    number={channel.number}
                    image={channel.image}
                  />
                );
              })}
            </div>

            <div className="events">
              <div className="hours">
                {hoursDay.map((h, index) => (
                  <p key={index} className="hour">
                    {h}
                  </p>
                ))}
              </div>
              {channels?.map((channel: any, index) => {
                return (
                  <div key={index} className="row-events">
                    {channel?.events?.map((event: any, index: number) => {
                      return <EventCard key={index} event={event} />;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </ModalContent>
      </ModalBackdrop>
    </div>
  );
};

export default Modal;
