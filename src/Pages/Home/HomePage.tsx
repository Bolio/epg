import { useState } from "react";
import { Button } from "../../Components/Button";
import { Modal } from "../../Components/Modal";
import styled from "styled-components";

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledHome>
      <Button
        type="button"
        backgroundcolor="#007bff"
        handleClick={handleToggleModal}
      >
        Mostrar EPG
      </Button>
      <Modal handleToggleModal={handleToggleModal} showModal={showModal} />
    </StyledHome>
  );
};

export default HomePage;
