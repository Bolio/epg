import styled from "styled-components";

export const StyledTVShowInfo = styled.div`
  width: 100%;
  height: 40%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;

  > div:nth-child(1) {
    display: flex;
    justify-content: end;
    align-items: center;
  }

  > div:nth-child(2) {
    // background-color: purple;
    padding: 0rem 1rem 0.5rem 0.25rem;
    display: flex;
    justify-content: start;
    align-items: center;

    h1 {
      color: white;
    }
  }
`;

export const StyledShowInfo = styled.div`
  width: 100%;
  padding: 0.5rem 1rem 1rem 0.25rem;
  //   background-color: green;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > p {
    color: white;
    margin: 0;

    &:nth-child(1) {
      margin-bottom: 0.5rem;
    }
  }
`;
