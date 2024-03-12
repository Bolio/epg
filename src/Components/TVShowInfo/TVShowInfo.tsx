import { useState, MouseEventHandler, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { Button } from "../Button";
import { MainTitle } from "../Titles";
import { StyledTVShowInfo, StyledShowInfo } from "./StyledComponents";
import { RootState } from "../../Redux/store";

interface IProps {
  handleToggleModal: MouseEventHandler<HTMLButtonElement>;
}

const TVShowInfo = ({ handleToggleModal }: IProps) => {
  const { title, airtime, description } = useSelector(
    (state: RootState) => state.tvShowInfo
  );
  return (
    <StyledTVShowInfo>
      <div>
        <Button
          type="button"
          backgroundColor="transparent"
          handleClick={handleToggleModal}
        >
          <AiOutlineClose />
        </Button>
      </div>
      <div>
        <MainTitle>{title}</MainTitle>
      </div>
      <StyledShowInfo>
        <p>{airtime}</p>
        <p>{description}</p>
      </StyledShowInfo>
    </StyledTVShowInfo>
  );
};

export default TVShowInfo;
