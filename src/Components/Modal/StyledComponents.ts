import styled from "styled-components";

export const ModalBackdrop = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 60%;
  background-color: gray;
  color: white;
  //   display: flex;
  //   flex-direction: row;

  div.container-channels-events {
    display: flex;
    flex-direction: row;
    height: 100%;
    // background-color: limegreen;

    overflow-y: auto;

    div.channels {
      width: 30%;
      height: 100vh;
    //   background-color: orange;
      // overflow: hidden;

      div.date {
        background-color: #000000;
        position: sticky;
        top: 0;
        width: 100%;
        text-align: center;

        p {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
        }
      }
    }

    div.events {
      display: flex;
      flex-direction: column;
      width: 70%;
      height: fit-content;
    //   background-color: purple;

      overflow-x: auto;
      white-space: nowrap;
      overflow-y: hidden;

      div.hours {
        background-color: #000000;
        // width: 100%;
        width: fit-content;
        text-align: center;
        display: flex;
        flex-direction: row;

        p.hour {
          width: 50px;
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          margin-right: 100px;
        }
      }

      div.row-events {
        display: flex;
        flex-direction: row;
        width: fit-content;
      }
    }
  }

  @media screen and (min-width: 768px) {
    div.container-channels-events {
      div.channels {
        width: 20%;
      }

      div.events {
        width: 80%;
      }
    }
  }
`;
